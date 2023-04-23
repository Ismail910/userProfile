
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
    user: { type: mongoose.Schema.Types.ObjectId,required:true, ref: "user" }
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;