const jwt = require('jsonwebtoken');
 const {JWT_SECRET} = require('../config/envConfig')
class Authorization {

    authorized(req , res ,next){
        const headerToken = req.headers.authorization;
       
        if(headerToken){
         const token = headerToken.split(' ')[1];
         console.log(token);
        const verified = jwt.verify(token, JWT_SECRET);
        if(verified){
            next();
        }else{
            return res.status(401).json({message: [{msg: `please add a valid token`}]})
        }
           
        }else{
            return res.status(401).json({errors: [{msg: `Please add token`}]})
        }

}
}
module.exports = new Authorization();