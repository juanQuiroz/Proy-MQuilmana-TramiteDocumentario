const express = require("express");
const router = express.Router();

const tramiteController = require("../controllers/tramiteController");

const auth = require("../middleware/auth");

// Importar middlewae de autenticacion

// RUTA -> /api/tramite
// Crear un nuevo tramite
router.post("/", tramiteController.crearTramite);

// Buscar tramite por codigo
router.post("/buscar", auth, tramiteController.obtenerTramite);

module.exports = router;
