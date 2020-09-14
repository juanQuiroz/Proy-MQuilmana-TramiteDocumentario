const mongoose = require("mongoose");

const DerivacionesSchema = mongoose.Schema({
  tramite: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tramites",
  },
  areaOrigen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuarios",
  },
  areaDestino: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuarios",
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
});

module.exports = mongoose.model("Derivaciones", DerivacionesSchema);
