var express = require("express");
var router = express.Router();
const multer = require("multer");
const storage = require("../../controllers/storage");
const upload = require("../../controllers/upload");
const fs = require("fs");
const path = require("path");
const Carrusel=require('../../models/carrusel');
const Vianda = require("../../models/viandas");

//Pagina principal del panel de control
router.get("/", async function (req, res, next) {
  async function miFuncionVianda() {
    try {
      const results = await Vianda.find({});
      return results;
    } catch (error) {
      console.error(error);
    }
  }
  async function miFuncionCarrusel() {
    try {
      const results = await Carrusel.find({});
      return results;
    } catch (error) {
      console.error(error);
    }
  }

  const data = await miFuncionVianda();
  const carrusel=await miFuncionCarrusel();

  res.render("admin/controlPanel", {
    layout: "admin/layout",
    data,
    carrusel
  });
});

//Carga de insertar viandas
router.get("/load", function (req, res, next) {
  res.render("admin/load", {
    layout: "admin/layout",
  });
});

//Agregar Viandas a la coleccion
router.post(
  "/agregarVianda",
  upload.single("imagen"),
  async function (req, res, next) {
    const vianda = new Vianda({
      imagen: req.file.filename,
      nombre: req.body.nombre,
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
    });
    try {
      await vianda.save();
      console.log("SE CARGO CORRECTAMENTE");
      res.redirect("/admin/controlPanel");
    } catch (error) {
      console.log(error);
      console.log("NO SE CARGARON LOS DATOS CORRECTAMENTE");
      res.render("/load", { error: "Error al crear la vianda" });
    }
  }
);
//ELIMINAR VIANDA
router.get("/eliminar/:id", async function (req, res, next) {
  var id = req.params.id;
  try {
    const elemento = await Vianda.findById(id);

    const imagePath = path.join(
      __dirname,
      `../../public/images/${elemento.imagen}`
    );

    console.log(elemento.imagen);
    if (elemento) {
      await Vianda.findByIdAndDelete(id);
      console.log("***SE ELIMINO LA VIANDA CORRECTAMENTE***");
      fs.unlinkSync(imagePath);
      res.redirect("/admin/controlPanel");
    } else {
      console.log("NO SE ELIMINO NADA");
      res.redirect("/admin/controlPanel");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

//EDITAR VIANDA
router.get("/editar/:id", async function (req, res, next) {
  var id = req.params.id;

  const elemento = await Vianda.findById(id);
  
  res.render("admin/edit", {
    layout: "admin/layout",
    elemento

  });
});

router.post(
  "/cargar_edicion",
  upload.single("imagen"),
  async function (req, res, next) {
    var id = req.body._id;

    try {
      const elemento = await Vianda.findById(id);

      if (!elemento) {
        console.log("La vianda a editar no existe");
        res.redirect("/admin/controlPanel");
      }

      elemento._id = req.body._id;
      elemento.imagen = req.file.filename;
      elemento.nombre = req.body.nombre;
      elemento.titulo = req.body.titulo;
      elemento.descripcion = req.body.descripcion;

      await elemento.save();
      console.log("CAMBIOS GUARDADOS CON EXITO");
      res.redirect("/admin/controlPanel");
    } catch (error) {
      const elemento = await Vianda.findById(id);
      elemento._id = req.body._id;
      elemento.nombre = req.body.nombre;
      elemento.titulo = req.body.titulo;
      elemento.descripcion = req.body.descripcion;
      await elemento.save();
      res.redirect("/admin/controlPanel");
    }
  }
);


//Agregar imagen para el carrusel
router.get("/carrusel", function (req, res, next) {
  res.render("admin/carrusel", {
    layout: "admin/layout",
  });
});

//Agregar imagen a la coleccion
router.post(
  "/agregarImagen",
  upload.single("imagen"),
  async function (req, res, next) {
    const carrusel = new Carrusel({
      imagen: req.file.filename,
      alt: req.body.alt,
      titulo: req.body.titulo,
    });
    try {
      await carrusel.save();
      console.log("SE CARGO CORRECTAMENTE");
      res.redirect("/admin/controlPanel");
    } catch (error) {
      console.log(error);
      console.log("NO SE CARGARON LOS DATOS CORRECTAMENTE");
      res.render("/load", { error: "Error al crear la imagen al carrusel" });
    }
  }
);

//ELIMINAR IMAGEN DEL CARRUSEL
router.get("/eliminarImagen/:id", async function (req, res, next) {
  var id = req.params.id;
  try {
    const elemento = await Carrusel.findById(id);

    const imagePath = path.join(
      __dirname,
      `../../public/images/${elemento.imagen}`
    );

    if (elemento) {
      await Carrusel.findByIdAndDelete(id);
      console.log("***SE ELIMINO LA IMAGEN CORRECTAMENTE***");
      fs.unlinkSync(imagePath);
      res.redirect("/admin/controlPanel");
    } else {
      console.log("NO SE ELIMINO NADA");
      res.redirect("/admin/controlPanel");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});
module.exports = router;
