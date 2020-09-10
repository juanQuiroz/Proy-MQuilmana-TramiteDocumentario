const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const multer = require("multer"),
  storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./src/archivos");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.codtramite + ".pdf");
    },
  });

app.use(cors());
app.use(express.json());

// Settings
app.set("port", process.env.PORT || 4000);

upload = multer({ storage });

// Routes
app.get("*/api/subir/:doc", (req, res) => {
  const documento = req.params.doc;

  res.sendFile(__dirname + `/archivos/${documento}.pdf`);
});

// POST ROUTE
app.post("*/api/subir", upload.single("archivo"), async (req, res) => {
  console.log(req.body.codtramite);
  console.log(req.file);

  res.send({ estado: true });
});

module.exports = app;
