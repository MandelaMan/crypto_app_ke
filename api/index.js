const express = require("express");
const userRoutes = require("./routes/user.route");
const authRoutes = require("./routes/auth.route");
const cookieParser = require("cookie-parser");
const path = require("path");

require("dotenv").config();

const app = express();

const ___dirname = path.resolve();

app.use(express.json());

app.use(cookieParser());

app.listen(3001, () => {
  console.log("Server is up and running " + process.env.APP_PORT);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use(express.static(path.join(___dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(___dirname, "client", "dist", "index.html"));
});

//This is a middleware that allows us to catch all errors and report
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
