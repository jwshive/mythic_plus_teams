const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passportSetup = require("./config/passport-setup");
const passport = require("passport");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");

const app = express();

// BNet Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

module.exports = app;
