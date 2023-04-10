var express=require('express');
var router=express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../../models/user');   
const jwtSecret = process.env.JWT_SECRET;    

router.get('/',function(req,res,next){
    res.render('admin/login',{
        layout:'admin/layout'
    })
})

router.post("/acceso", async (req, res) => {
    const { usuario, password } = req.body;
  
    const user = await User.findOne({ usuario });
  
    if (!user) {
      return res.render("admin/login", {
        layout:"admin/layout",
       error: "Datos ingresados invalidos" });
    }
  
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      return res.render("admin/login", {  
    layout:"admin/layout",
       error: "Datos ingresados invalidos" });
    }
  
    const token = jwt.sign({ usuario }, jwtSecret, { expiresIn: "1h" });
  
    res.cookie("token", token);
    res.redirect("/admin/controlPanel");
  });
  

  router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/admin/login");
  });
  

  router.post("/registerup", async (req, res) => {
    const { usuario, password } = req.body;
  
    // Verificar si ya existe un usuario con ese correo electrónico
    const userExists = await User.findOne({ usuario });
  
    if (userExists) {
      return res.render("register", { error: "Usuario already registered" });
    }
  
    // Encriptar la contraseña con bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    // Crear el nuevo usuario
    const newUser = new User({ usuario, password: hashedPassword });
  
    try {
      await newUser.save();
      res.redirect("/admin/login");
    } catch (error) {
      console.log(error);
      res.render("/admin/register", { 
        layout:"admin/layout",
        error: "Error creando usuario" });
    }
  });



module.exports = router;
