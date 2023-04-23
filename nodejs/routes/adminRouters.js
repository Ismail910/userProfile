const express = require('express');
const router = express.Router();

//validation ;;
const { loginValidations } = require("../validations/userValidation")
const { createUserValidations } = require('../validations/userValidation')
const { login} = require("../controllers/users/userController");

const createUser = require("../controllers/users/adminController")
const upload = require("../middlewares/uplode")

  
// router.post('/login',loginValidations, login);


router.post('/createUser',[createUserValidations, upload('userProfil').single('photo')], createUser.create);

router.get('/', createUser.get);
router.get('/:id', createUser.getById);

router.patch('/:id', createUser.update);

router.delete('/:id', createUser.delete);





  module.exports =  router;