const {validationResult} = require("express-validator")
const {hashedPassword , createToken ,comparaPassword} = require("../../services/authServices");
const UserModel = require('../../models/user');

const bcrypt = require('bcrypt');


 module.exports.login = async  (req,res)=>{
    const { email , password} = req.body;
    const errors = validationResult(req);
   
    
    if (errors.isEmpty) {
        try {
            const user = await UserModel.findOne({email})

            if (user) {
                console.log(password === user.password);
                
                
                
                if(password == user.password){
                    const token =  createToken({id:user._id, name:user.name,email:user.email,admin:user.admin})
                    if (user.admin) {
                        return res.status(201).json({token ,admin: true} )
                    }else{
                        return res.status(201).json({token , admin : false})

                    }
                }else{
                    return res.status(401).json({errors: [{msg: 'password not matched'}]})
                }
            }else{
                return res.status(401).json({errors: [{msg: `${email} is not found!`}]})
            }

        } catch (error) {
        return res.status(500).json(`server internal error`)
            
        }
    }else{
        return res.status(401).json({errors: errors.array()})
    }
 }

 module.exports.update = async  (req,res)=>{

        const objuser = {
           
            photo: req.file.filename,
          };
        if (req.file && res.statusCode != 404) {
            const imagePath = path.join(
              __dirname,
              "../../assets/uploads/userProfil",
              objuser.photo
            );
            fs.unlinkSync(imagePath);
            objuser.photo = req.file.filename;
          }
          const id = req.params.id;
        try {
            const business  = await adminModel.updateOne({_id:id},{$set:objuser});
            return res.json(business);
        } catch (error) {
            return res.status(500).send(error);
        }
    } 