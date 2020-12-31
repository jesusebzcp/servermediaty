/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "Token vació, permiso denegado" });
  }

  try {
    const encryption = jwt.verify(token, process.env.SECRET);

    req.user = encryption.id;

    next();
  } catch (error) {
    res.status(401).json({ msg: "Token no válido" });
  }
};
