const mongoose = require('mongoose');

const carruselSchema = new mongoose.Schema({
    imagen:{type:String,required:true},
    titulo: { type: String, required: true },
    alt: { type: String, required: true },
  },{
    timestamps:true,
    versionKey:false
  });

  const Carrusel=mongoose.model("carrusel",carruselSchema)

  module.exports=Carrusel;

