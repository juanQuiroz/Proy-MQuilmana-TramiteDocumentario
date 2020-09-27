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
