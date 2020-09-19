const Tramites = require("../models/Tramites");
const Derivaciones = require("../models/Derivaciones");

// Crear un nuevo tramite y hacer la primera derivacion
exports.crearTramite = async (req, res) => {
  // Extraer del req
  const {
    // codExpediente,
    // origenExpediente,
    // tipoTramite,
    // areaInicio,
    // areaDestino,
    // asunto,
    // nombre,
    // paterno,
    // materno,
    // docIndentidad,
    // telefono,
    // correo,
    // domicilio,
    // fundamentoSol,
    // fechaInicio,
    // estado,
  } = req.body;

  // Llenar collection de "Tramites"
  try {
    const tramite = new Tramites(req.body);
    await tramite.save();
    const codTramite = tramite.codTramite;

    // Almacenar datos de tramite para usar en la primera deriacion inmediata
    const dataTramite = tramite;

    // Llenar collection de "Derivaciones" (primera vez)

    const { _id, areaInicio, areaDestino } = dataTramite;
    try {
      const derivacion = new Derivaciones({
        tramite: _id,
        areaOrigen: areaInicio,
        areaDestino,
        fechaDerivacion: Date.now(),
        fechaAceptado: null,
        fechaRechazado: null,
      });
      await derivacion.save();
      res.json({ codTramite, tramite, derivacion });
    } catch (error) {
      console.log(error);
      res.status(500).send("Error al realizar primera derivacion");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al crear nuevo tramite");
  }
};

// Obtiene tramite por busqueda por codigo de tramite o de expediente
exports.obtenerTramite = async (req, res) => {
  try {
    // Extraer codigo del req

    const { codTramite, codExpediente } = req.body;

    const tramite = await Tramites.findOne({
      $or: [{ codTramite }, { codExpediente }],
    });

    if (!tramite) {
      return res.status(404).json({ msg: "Tramite no encotrado" });
    }

    res.json({ tramite });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error al conectar con la base de datos" });
  }
};
