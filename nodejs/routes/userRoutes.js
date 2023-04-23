const express = require('express');

const router = express.Router();
const upload = require("../middlewares/uplode")
const { update }= require("../controllers/users/userController")

const { authUser } = require('../middlewares/auth');



// const env = require('dotenv');
const jwt = require('jsonwebtoken');

const userModel = require ('../models/user');
const TOKEN_KEY =process.env.TOKEN_KEY || "ITI"



  
router.patch('/:id',[authUser,upload('userProfil').single('photo')], update);

  router.post("/login", async (req, res) => {

    // Our login logic starts here
    try {
      // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
       return res.status(400).send("All input is required");
      }
      
      // Validate if user exist in our database
      const user = await userModel.findOne({ email });
      console.log(user);
      console.log(password);
      console.log(user.password);
      if (user && (password== user.password)) {
       
        // Create token
        const token =  jwt.sign(
          {user},
          TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
        // user   
        // const response={message:'success',token:user.token}
       return res.status(200).json(user);
      }
      const errResponse = {message:'passwoer or email is invalid'}
      return res.status(400).send(errResponse);
    } catch (err) {

          return res.status(500).send(err);

    }
  });

    module.exports = router ; 