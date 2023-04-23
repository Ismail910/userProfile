const express = require('express');
const router = express.Router();
const upload = require("../middlewares/uplode")
const { update }= require("../controllers/users/userController")

router.patch('/:id',[upload('userProfil').single('photo')], update);

  
// router.put('/:id',[upload('userProfil').single('photo')], createUser.update);




  module.exports =  router;