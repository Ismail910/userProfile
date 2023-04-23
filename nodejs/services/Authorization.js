// <<<<<<< HEAD
// const jwt = require('jsonwebtoken');
//  const {JWT_SECRET} = require('../config/envConfig')
//  const UserModel = require("../models/user");




// module.exports.admin = async (req, res, next) => {
//   const token = req.headers["x-token"];

//   if (!token) {
//     return res.status(403).send("A token is required for authentication");
//   }
//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);

//     const user = await UserModel.findById(decoded.id);
//     if (!user) {
//       return res.status(401).send("Invalid Token");
//     }
//     req.user = user;
//     if (req.user.admin == true) {
//       return next();
//     } else {
//       return res.status(403).send("You do not have privileges");
//     }
//   } catch (err) {
//     return res.status(401).send("Invalid Token");
//   }
// };


// module.exports.user = async (req, res, next) => {
//     const token = req.headers["x-token"];
  
//     if (!token) {
//       return res.status(403).send("A token is required for authentication");
//     }
//     try {
//       const decoded = jwt.verify(token, JWT_SECRET);
  
//       const user = await UserModel.findById(decoded.id);
//       if (!user) {
//         return res.status(401).send("Invalid Token");
//       }
//       req.user = user;
//       if (req.user.admin == false) {
//         return next();
//       } else {
//         return res.status(403).send("You do not have privileges");
//       }
//     } catch (err) {
//       return res.status(401).send("Invalid Token");
//     }
//   };
  

// // const jwt = require('jsonwebtoken');
// //  const {JWT_SECRET} = require('../config/envConfig')
// // class Authorization {

// //     authorized(req , res ,next){
// //         const headerToken = req.headers.authorization;
       
// //         if(headerToken){
// //          const token = headerToken.split(' ')[1];
// //          console.log(token);
// //         const verified = jwt.verify(token, JWT_SECRET);
// //         if(verified){
// //             next();
// //         }else{
// //             return res.status(401).json({message: [{msg: `please add a valid token`}]})
// //         }
           
// //         }else{
// //             return res.status(401).json({errors: [{msg: `Please add token`}]})
// //         }

// // }
// // }
// // module.exports = new Authorization();


