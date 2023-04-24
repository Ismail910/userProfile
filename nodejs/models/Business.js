
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
    user: {type: mongoose.Schema.Types.ObjectId,  ref : "user" },
});

const UserModel = mongoose.model("business", UserSchema);
module.exports = UserModel;