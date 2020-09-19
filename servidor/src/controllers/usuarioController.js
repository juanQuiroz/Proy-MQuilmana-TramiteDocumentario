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
  const { nombreUsuario, nombreArea, contraseña } = req.body;

  try {
    // Validar que sea unico usuario registrado
    let usuario = await Usuarios.findOne({ nombreUsuario });

    if (usuario) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }

    // Si el usuario no existe, crea un nuevo usuario
    usuario = new Usuarios({
      nombreUsuario: nombreUsuario.toUpperCase(),
      nombreArea: nombreArea.toUpperCase(),
      contraseña,
    });

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

exports.obtenerUsuarios = async (req, res) => {
  const usuarios = await Usuarios.find();
  res.json({ usuarios });
};

// ACtualizar contraseña de usuarios
exports.actualizarContraseña = async (req, res) => {
  try {
    const { _id, contraseña } = req.body;

    // Si la tarea existe obviamente el proyecto tambien existe
    let usuarioExiste = await Usuarios.findById(_id);
    if (!usuarioExiste) {
      return res.status(404).json({ msg: "No existe ese Usuario / Gerencia" });
    }

    // Hashear la contraseña
    const salt = await bcrypt.genSalt(10);
    // Reescribir la contraseña con el nuevo hash generado
    nContraseña = await bcrypt.hash(contraseña, salt);

    // crear un objeto con la nueva informacion
    // const nuevaContraseña = {};

    // nuevaContraseña.contraseña = nContraseña;

    // Guardar la NuevaContraseña
    usuarioExiste = await Usuarios.findByIdAndUpdate(
      { _id },
      { contraseña: nContraseña },
      {
        new: true,
      },
    );
    res.json({ msg: "Contraseña actualizada correctamente", usuarioExiste });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
