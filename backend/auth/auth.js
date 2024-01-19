const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "BYST", (err, decoded) => {
      if (decoded) {
        console.log(decoded);
          req.body.userid=decoded.userid
        console.log(decoded.userid);
        next();
      } else {
        res.send({ msg: "Please Login First" });
      }
    });
  } else {
    res.send({ msg: "Please Login" });
  }
};

module.exports = { authenticate };