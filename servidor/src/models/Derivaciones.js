const mongoose = require("mongoose");

const DerivacionesSchema = mongoose.Schema({
  tramite: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tramites",
  },
  // areaOrigenID: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Usuarios",
  // },
  // areaDestinoID: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Usuarios",
  // },

  codExpediente: { type: String, required: true, trim: true },
  codTramite: { type: String, required: true, trim: true },
  asunto: { type: String, required: true, trim: true },

  areaOrigen: {
    type: String,
    required: true,
    trim: true,
  },
  areaDestino: {
    type: String,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    trim: true,
  },
  fechaDerivacion: {
    type: Date,
  },
  fechaAceptado: {
    type: Date,
  },
  fechaRechazado: {
    type: Date,
  },
  derivado: {
    type: Boolean,
    default: false,
  },
  finalizado: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Derivaciones", DerivacionesSchema);
