const router = require("express").Router();
const passport = require("passport");

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
      res.cookie('bnetID', res.req.user.id)
      res.cookie('battleTag', res.req.user.battletag)
      res.cookie('token', res.req.user.token)
    res.redirect("/");
    //res.json({ message: "Logged In Successfully", user: res.req.user });
  }
);

//auth logout
router.get("/logout", async (req, res) => {
  await req.logout();
  res.clearCookie("express:sess", { path: "/", httpOnly: true });
  res.clearCookie("express:sess.sig", { path: "/", httpOnly: true });
  res.clearCookie("battleTag");
  res.clearCookie("token");
  res.clearCookie("bnetID");
  return res.redirect("/");
});

module.exports = router;
