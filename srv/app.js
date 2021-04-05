const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passportSetup = require("./config/passport-setup");
const passport = require("passport");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const characterRouter = require("./routes/character");
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

// Force Login


// Database Init
mongoose.connect(
  keys.mongodb.connectURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Mongo, ONLINE");
  }
);

// Cookies
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.sessionKey],
  })
);

// Routes
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/character", characterRouter);

module.exports = app;
