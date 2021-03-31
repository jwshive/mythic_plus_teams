const BnetStrategy = require("passport-bnet").Strategy;
const passport = require("passport");
const keys = require("./keys");
const User = require("../models/user-model");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  //   User.findById(id, function (err, user) {
  //     done(err, user);
  //   });
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
      // check if user exists
      User.findOne({ bnetID: profile.id }).then((foundUser) => {
        if (foundUser) {
          // Update accessToken
          foundUser.updateOne({ accessToken: profile.token }, () => {
            console.log("Updated access token");
            return done(null, profile);
          });
        } else {
          // create user
          console.log(profile);
          new User({
            battletag: profile.battletag,
            bnetID: profile.id,
            emailAddress: "bogus@email.com",
            discordName: "",
            accessToken: profile.token,
          })
            .save()
            .then((newUser) => {
              console.log(newUser);
              return done(null, profile);
            });
        }
      });
    }
  )
);
