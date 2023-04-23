
// const {validationResult} = require("express-validator")
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const adminModel = require("../../models/user");
class  createUser {
    async  create (req ,res) {
        
       try {
        console.log("Creating");
        const objuser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            photo: req.file.filename,
            phoneNumber: req.body.phoneNumber,
            link:req.body.link,
            // admin:req.body.admin
          };

        const email = await adminModel.findOne({email: req.body.email});
        if(!email)
        {
            await adminModel.create(objuser);
            return res.status(201).send('User has created successfully!')
        }else{
            return res.status(409).send('email already exists')
        }
       } catch (error) {
        return res.status(401).send(error);
       }    
    }


    async get(req, res){
       try {
        const response = await adminModel.find({});
        return res.status(200).json(response)
       } catch (error) {
        return res.status(500).send(error);
       }
    }

    async getById(req, res){
        const id = req.params.id;
        try {
         const response = await adminModel.find({_id:id});
         return res.status(200).json(response)
        } catch (error) {
         return res.status(500).send(error);
        }
     }



    async update(req, res){
        const id = req.params.id;
        const user = await adminModel.findById(id);
        if (req.file || res.statusCode != 404) {
            const imagePath = path.join(
              __dirname,
              "../../assets/uploads/userProfil",
              user.photo
            );
            fs.unlinkSync(imagePath);
            user.photo = req.file.filename;
          }

         user.name = req.body.name;
          user.email = req.body.email;
         user.password = req.body.password;
         user.phoneNumber = req.body.phoneNumber;
          user.link = req.body.link;
        try {
           
           const userData =  await user.save();
            return res.json(userData);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async delete(req , res){
        try{
            const business= await adminModel.deleteOne({_id:req.params.id});
             return res.json(business);
          }
          catch(err){
             res.status(500).send(err);
          }
    }
}

module.exports = new createUser; 