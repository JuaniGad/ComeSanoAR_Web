const mongoose = require('mongoose');

const viandaSchema = new mongoose.Schema({
    imagen:{type:String},
    nombre: { type: String, required: true },
    titulo: { type: String, required: true },
    descripcion:{type: String,require:true}
  },{
    timestamps:true,
    versionKey:false
  });

  const Vianda=mongoose.model("viandas",viandaSchema)

  module.exports=Vianda;

