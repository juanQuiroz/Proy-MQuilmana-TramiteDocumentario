const mongoose = require("mongoose");

const UsuariosSchema = mongoose.Schema({
  nombreUsuario: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  nombreArea: {
    type: String,
    trim: true,
  },

  contraseña: {
    type: String,
    required: true,
    trim: true,
  },

  adminRol: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Usuarios", UsuariosSchema);
