const secured = (req, res, next) => {
  if (req.cookies['battleTag']) {
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/auth/login");
};

module.exports = secured;