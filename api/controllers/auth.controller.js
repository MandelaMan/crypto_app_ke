const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");
const { errorHandler } = require("../utils/helperFunctions.js");
const { sign } = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const { createAccount, userByPhone } = require("../models/user.model.js");

module.exports = {
  signIn: async (req, res, next) => {
    try {
      userByPhone(req.body.phone_number, (err, results) => {
        if (err) {
          return next(errorHandler(500, err.message));
        }

        const isValidUser = results;

        if (!results) {
          return next(
            errorHandler(500, "Invalid credentials. Please try again...")
          );
        }

        const result = compareSync(
          req.body.password.toString(),
          results.password
        );

        if (result) {
          results.password = undefined;

          const token = sign({ id: results.user_code }, process.env.JWT_KEY, {
            expiresIn: "1h",
          });

          const { password: pass, ...remaining_info } = results;

          res
            .cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json(remaining_info);
        } else {
          return res.status(500).json({
            success: 0,
            message: "Invalid Email or Address",
          });
        }
      });
    } catch (err) {
      return next(errorHandler(500, err.message));
    }
  },
  signUp: async (req, res, next) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.user_code = uuidv4();
    body.password = hashSync(body.password, salt);

    try {
      createAccount(body, (err, results) => {
        if (err) {
          return next(errorHandler(500, err.message));
        }

        return res.status(201).json({
          success: 1,
          data: results.inserId,
        });
      });
    } catch (err) {
      return next(errorHandler(500, err.message));
    }
  },
};
