const {validationResult} = require("express-validator")

const SicialMediaModel = require("../../models/social_media");
const UserModel = require("../../models/user");
class SicialMedia {
    async  create (req ,res) {
       try {
       const account= await SicialMediaModel.create(req.body)
        await UserModel.updateOne({_id:req.params.userID},{$push:{'socialMedia':account._id}})
        return res.status(201).send('your account has created successfully!')
       } catch (error) {
        return res.status(401).send(error);
       }    
    }


    async getAccounts(req, res){
        const userID = req.params.user;
       try {
        const response = await SicialMediaModel.find({user:userID});
        return res.status(200).json(response)
       } catch (error) {
        return res.status(500).send(error);
       }
    }

    async deleteAccount(req , res){
        try{
            const account= await SicialMediaModel.deleteOne({_id:req.params.id});
             return res.json(account);
          }
          catch(err){
             res.status(500).send(err);
          }
    }
}

module.exports = new SicialMedia; 