const express = require("express");
const router = express.Router();

const tramiteController = require("../controllers/tramiteController");

// Importar middlewae de autenticacion

// RUTA -> /api/tramite
// Crear un nuevo tramite
router.post("/", tramiteController.crearTramite);

module.exports = router;
