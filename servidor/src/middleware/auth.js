const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Leer el token del header
  const token = req.header("x-auth-token");
  console.log(token);

  // Si no hay token ..
  if (!token) {
    return res.status(401).json({ msg: "no token, permiso denegado" });
  }

  // Validar token
  try {
    const cifrado = jwt.verify(token, process.env.secreta);

    // guardarlo en el req para ser usado por el sgte middleware
    req.usuario = cifrado;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token no valido" });
  }
};
