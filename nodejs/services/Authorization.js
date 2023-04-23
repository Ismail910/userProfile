// const jwt = require('jsonwebtoken');
//  const {JWT_SECRET} = require('../config/envConfig')
// class Authorization {

//     authorized(req , res ,next){
//         const headerToken = req.headers.authorization;
       
//         if(headerToken){
//          const token = headerToken.split(' ')[1];
//          console.log(token);
//         const verified = jwt.verify(token, JWT_SECRET);
//         if(verified){
//             next();
//         }else{
//             return res.status(401).json({message: [{msg: `please add a valid token`}]})
//         }
           
//         }else{
//             return res.status(401).json({errors: [{msg: `Please add token`}]})
//         }

// }
// }
// module.exports = new Authorization();




const jwt = require ('jsonwebtoken');
const { model } = require('mongoose');
const TOKEN_KEY = "ITI"

exports.authAdmin = function (req,res,next){
     const token = req.headers["x-token"]; 
    // console.log(token);
     if(!token) 
     {
        return res.status(403).send("A token is required for authentication");
     }
     try{
   
          jwt.verify(token,TOKEN_KEY,(err,decoded)=>
         {
          if (decoded.user.isAdmin != true) 
          return res.status(401).json({ message: "Not authorized" })

            req.user = decoded;  
            return next();


         }) ;
       
      

                     

      }
     catch(err)
     {
         return res.status(401).send("invalid Token");   
     }
     //return next();  
}




exports.authUser = function (req,res,next){
   const token = req.headers["x-token"]; 
   if(!token) 
   {
      return res.status(403).send("A token is required for authentication");
   }
   try{
        jwt.verify(token,TOKEN_KEY,(err,decoded)=>
       {
        if (decoded.user.isAdmin == true) 
        return res.status(401).json({ message: "Not authorized" })

          req.user = decoded;  
          return next();

       }) ;
     
                            
    }
   catch(err)
   {
       return res.status(401).send("invalid Token");   
   }
   //return next();  
}
