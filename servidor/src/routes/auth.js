const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

const auth = require("../middleware/auth");

// /api/auth

// Autentica un usuario
router.post("/", authController.autenticarUsuario);

// obtener usuario autenticado
router.get("/", auth, authController.usuarioAutenticado);

module.exports = router;
