const mongoose = require("mongoose");

const TramitesSchema = mongoose.Schema({
  codTramite: {
    type: String,
    required: true,
    default: Date.parse(new Date()).toString(),
  },
  codExpediente: {
    type: String,
    required: true,
    trim: true,
  },
  // Interno / externo
  origenExpediente: {
    type: String,
    required: true,
    trim: true,
  },
  tipoTramite: {
    type: String,
    required: true,
    trim: true,
  },
  areaInicio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuarios",
  },
  areaDestino: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuarios",
  },
  asunto: {
    type: String,
    required: true,
    trim: true,
  },
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  paterno: {
    type: String,
    required: true,
    trim: true,
  },
  materno: {
    type: String,
    required: true,
    trim: true,
  },
  docIndentidad: {
    type: String,
    required: true,
    trim: true,
  },
  telefono: {
    type: String,
    trim: true,
  },
  correo: {
    type: String,
    trim: true,
  },
  domicilio: {
    type: String,
    trim: true,
  },
  fundamentoSol: {
    type: String,
    trim: true,
  },
  fechaInicio: {
    type: Date,
  },
  // estado true -> terminado, false: en proceso
  estado: {
    type: Boolean,
    default: false,
    trim: true,
  },
});

module.exports = mongoose.model("Tramites", TramitesSchema);
