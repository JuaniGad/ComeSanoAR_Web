var express = require('express');
var router=express.Router();
const Carrusel=require('../../models/carrusel');
const Vianda = require("../../models/viandas");

router.get('/viandas',async function(req,res,next){

    Vianda.find({})
    .then(viandas => {
      res.json(viandas);
    })
    .catch(err => {
      res.send(err);
    });
})

router.get('/images/:imageName', (req, res) => {
  const imageName = req.params.imageName;

  res.sendFile(`C:/ReacCapetaProyecto/Tefy/backend/public/images/${imageName}`, (err) => {
    if (err) {
      console.error(err);
      res.status(404).send("File not found"); // Manejo del error
    }
    else {
      console.log(`Sent file ${imageName} successfully`); // Registro en consola del envío del archivo
    }
  });
});

router.get('/carrusel',async function(req,res,next){

    Carrusel.find({})
    .then(viandas => {
      res.json(viandas);
    })
    .catch(err => {
      res.send(err);
    });
})


module.exports=router;
