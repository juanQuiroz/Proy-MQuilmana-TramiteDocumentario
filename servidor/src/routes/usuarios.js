const express = require("express");
const router = express.Router();

// Controller
const usuarioController = require("../controllers/usuarioController");

// Express-validator
const { check } = require("express-validator");

//  /api/usuarios
// crear nuevo usuario

router.post(
  "/",
  [
    check("nombreUsuario", "El nombre de usuario es obligatorio")
      .not()
      .isEmpty(),
  ],
  usuarioController.crearUsuario,
);

// Obtener usuarios
router.get("/", usuarioController.obtenerUsuarios);

// AactualizarContraseña
router.post("/actualizarpass", usuarioController.actualizarContraseña);

module.exports = router;
