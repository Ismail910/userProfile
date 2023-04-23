const express = require('express');
const router = express.Router();

//validation ;;
const { loginValidations } = require("../validations/userValidation")
const { createUserValidations } = require('../validations/userValidation')
const { login} = require("../controllers/users/userController");

const createUser = require("../controllers/users/adminController")
const upload = require("../middlewares/uplode");

const { authAdmin } = require("../middlewares/auth");


router.post('/',[authAdmin, createUserValidations, upload('userProfil').single('photo')], createUser.create);

router.get('/', createUser.get);
router.get('/:id', createUser.getById);

router.put('/:id',[authAdmin, upload('userProfil').single('photo')], createUser.update);

router.delete('/:id',authAdmin, createUser.delete);

  module.exports =  router;