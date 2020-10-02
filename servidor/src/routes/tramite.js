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

// Listar todos los tramites
router.get("/listarTramites", auth, tramiteController.listarTramites);

// Listar todos los tramites pendientes de un determinado usuario
router.post(
  "/listarTramitesUsuario",
  auth,
  tramiteController.listarTramitesUsuario,
);

// Aceptar tramites
router.post("/aceptarTramites", auth, tramiteController.aceptarTramites);

// listar tramites aceptados
router.post(
  "/listarTramitesAceptados",
  auth,
  tramiteController.listarTramitesAceptados,
);

// Derivar tramites
router.post("/derivarTramite", auth, tramiteController.derivarTramite);

module.exports = router;
