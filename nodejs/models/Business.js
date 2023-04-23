
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        require:true,
        type: String
    },
    photo:{
        type: String,

    },
    video:{
        type: String,

    },
    description:{
        type: String,
    },
    link:{
        type: String
    },
   
});

const UserModel = mongoose.model("business", UserSchema);
module.exports = UserModel;