// Importar variables de entorno
require("dotenv").config();

const app = require("./app");

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://mdph-enlinea.herokuapp.com/",
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method",
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

async function main() {
  await app.listen(app.get("port"));
  console.log("Servidor corriendo en el puerto 4000");
}

main();
