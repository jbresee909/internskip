const jwt = require("jsonwebtoken");
const jwt_secret = process.env.JWT_SECRET;

function auth(req, res, next) {
  // check for token
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).json({ msg: "no token, authorization denied" });

  try {
    // Verify Token
    const decoded = jwt.verify(token, jwt_secret);

    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "token is not valid" });
  }
}

module.exports = auth;
