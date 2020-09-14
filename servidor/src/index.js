const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

// Crear servidor
const app = express();

// Conectar  BD
conectarDB();

// habilitar cors
app.use(cors());

// habilitar Json
app.use(express.json({ extended: true }));

// Definir puerto del app

const PORT = process.env.PORT || 4000;

// Rutas
app.use("/api/tramite", require("./routes/tramite"));
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/auth", require("./routes/auth"));

// Arrancar el app
app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto ${PORT}`);
});
