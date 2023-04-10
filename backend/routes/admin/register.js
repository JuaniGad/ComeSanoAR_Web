var express = require('express');
var router=express.Router();

router.get("/", (req, res) => {
    res.render("admin/register",{
    layout:"admin/layout"});
  });

  
module.exports = router;
