


// const {validationResult} = require("express-validator")

const businessModel = require("../../models/Business");
class businessMedia {
    async  create (req ,res) {
       try {
        await businessModel.create(req.body)
        return res.status(201).send('your business has created successfully!')
       } catch (error) {
        return res.status(401).send(error);
       }    
    }


    async get(req, res){
        const userID = req.params.user;
       try {
        const response = await businessModel.find({user:userID});
        return res.status(200).json(response)
       } catch (error) {
        return res.status(500).send(error);
       }
    }

    async update(req, res){
        try {
            const id = req.params.id;
            const business  = await businessModel.updateOne({_id:id},{$set:req.body});
            return res.json(business);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async delete(req , res){
        try{
            const business= await businessModel.deleteOne({_id:req.params.id});
             return res.json(business);
          }
          catch(err){
             res.status(500).send(err);
          }
    }
}

module.exports = new businessMedia; 