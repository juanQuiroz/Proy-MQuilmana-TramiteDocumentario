const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

// Crear servidor
const app = express();

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://sistradmuniquilmana.herokuapp.com/",
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method",
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

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
