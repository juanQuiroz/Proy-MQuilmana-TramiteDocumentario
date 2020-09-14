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
    res.json({ codTramite });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al crear nuevo tramite");
  }
  // Llenar collection de "Derivaciones" (primera vez)
  //   try {
  //     const derivacion = new Derivaciones({
  //       tramite,
  //       areaOrigen,
  //       areaDestino,
  //       fechaDerivacion,
  //       fechaAceptado,
  //       fechaRechazado,
  //     });
  //     await tramite.save();
  //     res.json({ codTramite });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).send("Error al realizar primera derivacion");
  //   }
};
