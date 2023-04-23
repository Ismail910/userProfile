const express = require('express');
const router = express.Router();

//validation ;;
const { loginValidations } = require("../validations/userValidation")
const { createUserValidations } = require('../validations/userValidation')
const { login} = require("../controllers/users/userController");

const createUser = require("../controllers/users/adminController")
const upload = require("../middlewares/uplode")
const { admin } = require('../services/Authorization')
  
router.post('/login',loginValidations, login);

router.post('/',[admin, createUserValidations, upload('userProfil').single('photo')], createUser.create);

router.get('/',admin, createUser.get);
router.get('/:id',admin, createUser.getById);

router.put('/:id',[admin,upload('userProfil').single('photo')], createUser.update);

router.delete('/:id',admin, createUser.delete);

  module.exports =  router;