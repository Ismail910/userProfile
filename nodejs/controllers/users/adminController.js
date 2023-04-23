



// const {validationResult} = require("express-validator")


const adminModel = require("../../models/user");
class  createUser {
    async  create (req ,res) {
       try {
      
        const objuser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            photo: req.file.filename,
            phoneNumber: req.body.phoneNumber,
            link:req.body.link,
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
        try {
            const id = req.params.id;
            const business  = await adminModel.updateOne({_id:id},{$set:req.body});
            return res.json(business);
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