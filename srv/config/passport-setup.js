const BnetStrategy = require("passport-bnet").Strategy;
const passport = require("passport");
const keys = require("./keys");
const db = require("../config/database");
const User = require("../models/user-model");
const UserComms = require("../models/user-comms-model");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new BnetStrategy(
    {
      clientID: keys.bnet.clientID,
      clientSecret: keys.bnet.clientSecret,
      callbackURL: keys.bnet.callbackUrl,
      region: "us",
      scope: ["wow.profile"],
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(typeof User);
      User.findOrCreate({
        where: { bnetID: profile.id },
        defaults: {
          battletag: profile.battletag,
          bnetID: profile.id,
          accessToken: profile.token,
        },
      });
      UserComms.findOrCreate({
        where: { bnetID: profile.id },
        defaults: {
          bnetID: profile.id,
          emailAddress: "name@company.com",
          discordName: "",
        },
      });
      return done(null, profile);
    }
  )
);
