const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");
const {
  errorHandler,
  generateToken,
  generateInvitationCode,
} = require("../utils/helperFunctions.js");
const { sign } = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const { createAccount, userByPhone } = require("../models/user.model.js");
const {
  addInvitationCode,
  updateInvitationCodeRedeemTimes,
} = require("../models/invitation.model.js");
const { redeemCode } = require("./user.controller.js");

module.exports = {
  signIn: async (req, res, next) => {
    try {
      await userByPhone(req.body.phone_number, (err, results) => {
        if (err) {
          return next(errorHandler(500, err.message));
        }

        if (!results) {
          return res.status(200).json({
            success: 0,
            message: "Invalid Mobile No. or Password",
          });
        } else {
          const result = compareSync(
            req.body.password.toString(),
            results.password
          );

          if (result) {
            results.password = undefined;

            const token = generateToken(results.user_code);

            const { password: pass, ...remaining_info } = results;

            res
              .cookie("access_token", token, { httpOnly: true })
              .status(200)
              .json(remaining_info);
          } else {
            return res.status(200).json({
              success: 0,
              message: "Invalid Mobile No. or Password",
            });
          }
        }
      });
    } catch (err) {
      return next(errorHandler(500, err.message));
    }
  },
  signUp: async (req, res, next) => {
    const body = req.body;
    const salt = genSaltSync(10);
    const user_code = (body.user_code = uuidv4());

    body.password = hashSync(body.password, salt);

    try {
      await createAccount(body, (err, results) => {
        if (err) {
          next(errorHandler(500, err.message));

          return res.status(200).json({
            success: 0,
            message: "Error creating the account",
          });
        }

        const token = generateToken(user_code);

        const code = generateInvitationCode();

        const result = {
          user_code,
          username: body.username,
          phone_number: body.phone_number,
          email: "",
          invitation_code: code,
          is_verified: 1,
        };

        const input = {
          user_id: user_code,
          code,
          reedem_amount: 250,
        };

        addInvitationCode(input, (err, results) => {
          if (err) {
            next(errorHandler(500, err.message));
          }
        });

        //check if the user has added an invitation code proceed to credit user account
        if (body.invitation_code) {
          redeemCode(code);
        }

        return res
          .cookie("access_token", token, { httpOnly: true })
          .status(201)
          .json(result);
      });
    } catch (err) {
      return next(errorHandler(500, err.message));
    }
  },
  signOut: async (req, res, next) => {
    try {
      return res.clearCookie("access_token").res.status(200).json({
        message: "User has been logged out",
      });
    } catch (err) {
      next(errorHandler(500, "Internal server error"));
    }
  },
  validateCode: async (req, res, next) => {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(403, "You are not authenticated"));
    }

    try {
      res.clearCookie("access_token");
      res.status(200).json({
        message: "User has been logged out",
      });
    } catch (err) {
      next(errorHandler(500, "Internal server error"));
    }
  },
};
