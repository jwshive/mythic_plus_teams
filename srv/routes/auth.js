const router = require("express").Router();
const passport = require("passport");
//const User = require("../models/user-model");

//auth login
router.get("/login", passport.authenticate("bnet"));

// auth callback
router.get(
  "/bnet/redirect",
  passport.authenticate("bnet", {
    failureRedirect: "/",
    scope: ["wow.profile"],
  }),
  (req, res) => {
    // res.redirect('/dashboard');
    res.json({ message: "Logged In Successfully", user: res.req.user });
  }
);

//auth logout
router.get("/logout", async (req, res) => {
  await req.logout();
  res.clearCookie("express:sess", { path: "/", httpOnly: true });
  res.clearCookie("express:sess.sig", { path: "/", httpOnly: true });
  return res.redirect("/");
});

module.exports = router;
