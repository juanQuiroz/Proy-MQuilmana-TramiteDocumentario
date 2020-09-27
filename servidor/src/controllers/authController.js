const Usuarios = require("../models/Usuarios");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.autenticarUsuario = async (req, res) => {
  // Comprobar errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // extraer usuario y contraseña
  const { nombreUsuario, contraseña } = req.body;

  try {
    const usuarioMayus = nombreUsuario.toUpperCase();
    //Revisar que el usuario este registrado
    let usuario = await Usuarios.findOne({ nombreUsuario: usuarioMayus });
    if (!usuario) {
      return res.status(400).json({ msg: "El usuario no existe" });
    }

    // Si el usuario existe
    // // comparar contraseñas
    const passCorrecto = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!passCorrecto) {
      return res.status(400).json({
        msg: "la contraseña es incorrecta",
      });
    }

    // Crear y firmar el jsonwebtoken
    const payload = {
      id: usuario.id,
    };

    jwt.sign(
      payload,
      process.env.secreta,
      { expiresIn: 28800 },
      (error, token) => {
        if (error) throw error;

        res.json({ token });
      },
    );
  } catch (error) {
    console.log(error);
  }
};

// Obtener datos de usuario autenticado
exports.usuarioAutenticado = async (req, res) => {
  try {
    // retornar los datos del usuario sin la contraseña
    const usuario = await Usuarios.findById(req.usuario.id).select(
      "-contraseña",
    );
    console.log(req.body);
    res.json({ usuario });
  } catch (error) {
    console.log(error.response);
    res.status(500).json({ msg: "hubo un error" });
  }
};
