const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  // check if the token is valid/ not malformed
  const token = req.headers.token;

  if (!token) {
    res.status(403).send({
      message: "you are not logged in",
    });
    return;
  }

  // if valid grab the username
  const decoded = jwt.verify(token, "custom_key");
  const username = decoded.username;

  if (!username) {
    res.status(403).json({
      message: "malformed token",
    });
    return;
  }

  // stamp identity onto req so the route knows WHO this is
  req.username = username;
  next();
}

module.exports = { authMiddleware };
