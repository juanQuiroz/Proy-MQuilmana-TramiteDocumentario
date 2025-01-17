const Tramites = require("../models/Tramites");
const Derivaciones = require("../models/Derivaciones");
const { findByIdAndDelete } = require("../models/Tramites");

// Crear un nuevo tramite y hacer la primera derivacion
exports.crearTramite = async (req, res) => {
  // Llenar collection de "Tramites"
  try {
    const tramite = new Tramites(req.body);
    await tramite.save();
    const codTramite = tramite.codTramite;

    // Almacenar datos de tramite para usar en la primera deriacion inmediata
    const dataTramite = tramite;

    // Llenar collection de "Derivaciones" (primera vez)

    const {
      _id,
      areaInicio,
      areaDestino,
      descripcion,
      codExpediente,
      asunto,
    } = dataTramite;

    try {
      console.log(codExpediente, codTramite, asunto);
      const derivacion = new Derivaciones({
        tramite: _id,
        areaOrigen: areaInicio,
        codTramite,
        codExpediente,
        asunto,
        areaDestino,
        descripcion: "Primera derivacion",
        fechaDerivacion: Date.now() - 18000000,
        fechaAceptado: null,
        fechaRechazado: null,
      });
      await derivacion.save();
      res.json({ codTramite, msg: "Registo de tramite exitoso" });
    } catch (error) {
      console.log(error);
      res.status(500).send("Error al realizar primera derivacion");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("(*) Son Campos Obligatorios");
  }
};

// Obtiene tramite por busqueda por codigo de tramite o de expediente
// Ademas obtiene el area actual del tramite

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

    const derivaciones = await Derivaciones.find({ tramite: tramite._id });

    res.json({ tramite, derivaciones });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error al conectar con la base de datos" });
  }
};

// Listar Todos los tramites

exports.listarTramites = async (req, res) => {
  try {
    const tramites = await Tramites.find();

    if (!tramites) {
      return res.status(404).json({ msg: "No hay tramites disponibles" });
    }

    res.json({ tramites });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error al conectar con la base de datos" });
  }
};

// Listar Tramites que pertenecen al usuario
// derivaciones que tengan como area de destino el  area actual del usuario logueado
exports.listarTramitesUsuario = async (req, res) => {
  try {
    // Extraer del req
    const { areaAtual } = req.body;

    const derivaciones = await Derivaciones.find({
      areaDestino: areaAtual,
      finalizado: false,
      fechaAceptado: null,
      fechaRechazado: null,
    });

    if (!derivaciones) {
      return res.status(404).json({ msg: "No tiene derivaciones pendientes" });
    }

    // derivaciones.map(async d => {
    //   var tramite = await Tramites.findOne({ _id: d.tramite });
    // });

    res.json({ derivaciones });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error al conectar con la base de datos" });
  }
};

//Aceptar Tramites
exports.aceptarTramites = async (req, res) => {
  try {
    // Extraer del req
    const { ids } = req.body;
    console.log(ids);

    if (!ids[0]) {
      return res.status(404).json({ msg: "No tiene derivaciones pendientes" });
    }
    var derivaciones;
    ids.map(async id => {
      derivaciones = await Derivaciones.findByIdAndUpdate(
        {
          _id: id,
        },
        { fechaAceptado: Date.now() - 18000000 },
        { new: true },
      );
    });
    res.json({ msg: "Tramites aceptados correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error al conectar con la base de datos" });
  }
};

//Rechazar Tramites
//// Rechazar tramites y derivar nuevamente al area anterior con la descripcion :"retorno por rechazo"
exports.rechazarTramites = async (req, res) => {
  try {
    // Extraer del req
    const { ids } = req.body;

    if (!ids[0]) {
      return res.status(404).json({ msg: "No tiene derivaciones pendientes" });
    }
    var derivaciones;
    ids.map(async id => {
      derivaciones = await Derivaciones.findByIdAndUpdate(
        {
          _id: id,
        },
        { fechaRechazado: Date.now() },
        { new: true },
      );

      const derivacion = await Derivaciones.findById({ _id: id });

      const derivacionRechazo = new Derivaciones({
        tramite: derivacion.tramite,
        areaOrigen: derivacion.areaDestino,
        codTramite: derivacion.codTramite,
        codExpediente: derivacion.codExpediente,
        asunto: derivacion.asunto,
        areaDestino: derivacion.areaOrigen,
        descripcion: "Retorna al area por rechazo",
        fechaDerivacion: Date.now() - 18000000,
        fechaAceptado: null,
        fechaRechazado: null,
      });

      await derivacionRechazo.save();
    });
    res.json({ msg: "Tramites rechazados correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error al conectar con la base de datos" });
  }
};

// Obtener tramites aceptados
exports.listarTramitesAceptados = async (req, res) => {
  try {
    // Extraer del req
    const { areaAtual } = req.body;

    const derivaciones = await Derivaciones.find({
      areaDestino: areaAtual,
      fechaAceptado: { $ne: null },
      fechaRechazado: null,
      derivado: false,
    });

    if (!derivaciones) {
      return res.status(404).json({ msg: "No tiene tramites por derivar" });
    }

    res.json({ derivaciones });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error al conectar con la base de datos" });
  }
};

// Derivar Tramite
exports.derivarTramite = async (req, res) => {
  try {
    const {
      tramiteId,
      derivacionId,
      areaDestino,
      descripcion,
      areaOrigen,
      codTramite,
      codExpediente,
      asunto,
    } = req.body;
    const derivacion = new Derivaciones({
      tramite: tramiteId,
      areaOrigen,
      codTramite,
      codExpediente,
      asunto,
      areaDestino,
      descripcion,
      fechaDerivacion: Date.now() - 18000000,
      fechaAceptado: null,
      fechaRechazado: null,
    });

    await Derivaciones.findByIdAndUpdate(
      {
        _id: derivacionId,
      },
      { derivado: true },
      { new: true },
    );

    await derivacion.save();
    res.json({ msg: "Registo de tramite exitoso" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al derivar el tramite");
  }
};

// ELimnar tramite por ID
exports.eliminarTramite = async (req, res) => {
  try {
    const { id } = req.body;
    await Tramites.findByIdAndDelete({ _id: id });
    await Derivaciones.findOneAndDelete({ tramite: id });

    res.json({ msg: "Tramite Eliminado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al eliminar el tramite");
  }
};

// Finalizar tramites (finaliza una derivacion????)
exports.finalizarTramite = async (req, res) => {
  try {
    const { id } = req.body;
    await Derivaciones.findByIdAndUpdate(
      {
        _id: id,
      },
      { finalizado: true, derivado: true },
      { new: true },
    );
    const derivacion = await Derivaciones.findById({ _id: id });
    await Tramites.findByIdAndUpdate(
      {
        _id: derivacion.tramite,
      },
      { estado: true },
      { new: true },
    );

    await derivacion.save();
    res.json({ msg: "Finalizacion de tramite exitosa" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al finalizar el tramite");
  }
};

exports.obtenerTramiteSE = async (req, res) => {
  try {
    // Extraer codigo del req
    const { codigo } = req.body;

    const tramite = await Tramites.findOne({
      $or: [{ codTramite: codigo }, { codExpediente: codigo }],
    });

    if (!tramite) {
      return res.status(404).json({ msg: "Tramite no encotrado" });
    }

    const derivaciones = await Derivaciones.find({ tramite: tramite._id });

    res.json({ tramite, derivaciones });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error al conectar con la base de datos" });
  }
};
