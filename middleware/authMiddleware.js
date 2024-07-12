const jwt = require("jsonwebtoken");

exports.requireAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.redirect("/login");
      } else {
        req.user = decodedToken;
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};
