// const bcrypt = require('bcrypt');
// const jwt = require("jsonwebtoken"); 
// const {JWT_SECRET} = require("../config/envConfig");


// module.exports.hashedPassword =async (password)=>{
//     const salt = await bcrypt.genSalt(10);
//     const hashed = await bcrypt.hash(password, salt); 
//     return hashed
// } 

// module.exports.createToken = (user)=>{
//     return  jwt.sign( user, JWT_SECRET,{
//         expiresIn:'10d'
//        })
// }

// module.exports.comparaPassword = async (password , dbpassword )=>{
//     console.log(password == dbpassword);
//     console.log(dbpassword);
//     return await (bcrypt.compare(password, dbpassword))
// }





// module.exports.hashedPassword =async (password)=>{
//     const salt = await bcrypt.genSalt(10);
//     const hashed = await bcrypt.hash(password, salt); 
//     return hashed
// } 



// module.exports.createToken = (user)=>{
//     return  jwt.sign( user, JWT_SECRET,{
//         expiresIn:'10d'
//        })
// }

// module.exports.comparaPassword = async (password , dbpassword)=>{
//     return await bcrypt.compare(password, dbpassword)
// }

