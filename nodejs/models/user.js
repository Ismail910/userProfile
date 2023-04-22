
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        require:true,
        type: String
    },
    photo:{
        type: String,

    },
    phoneNumber:{
        require:true,
        type: Number,
    },
    email: {
        require:true,
        type: String
    },
    password: {
        require:true,
        type: String
    },
    admin: {
        require:true,
        type: Boolean,
        default: false
    },
    link:{
       require:true,
        type: String
    }
    
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;