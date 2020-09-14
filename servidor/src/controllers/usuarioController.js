const Usuarios = require("../models/Usuarios");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.crearUsuario = async (req, res) => {
  // Revisar si hay errores, en caso de haber errores genera un arreglo de errores
  const errores = validationResult(req);

  // Si errores no esta vacio
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // Extraer usuario y contraseña
  const { nombreUsuario, contraseña } = req.body;

  try {
    // Validar que sea unico usuario registrado
    let usuario = await Usuarios.findOne({ nombreUsuario });

    if (usuario) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }

    // Si el usuario no existe, crea un nuevo usuario
    usuario = new Usuarios(req.body);

    // Hashear la contraseña
    const salt = await bcrypt.genSalt(10);
    // Reescribir la contraseña con el nuevo hash generado
    usuario.contraseña = await bcrypt.hash(contraseña, salt);

    // Guardar nuevo usuario creado
    await usuario.save();

    // crear y firmar el JWT
    const payload = {
      id: usuario.id,
    };

    jwt.sign(
      payload,
      process.env.secreta,
      // Expira en hrs
      { expiresIn: 28800 },
      (error, token) => {
        if (error) throw error;

        // si no se encontraron errores retornar el token
        res.json({ token });
      },
    );
  } catch (error) {
    console.log(error);
    res.status(400).send("Error en la creacion de usuario nuevo");
  }
};
