
const mongoose = require('mongoose');

const socialSchema = mongoose.Schema({
    name:{
        require:true,
        type: String
    },
    link:{
        type: String,
        enum: ["facebook", "twitter", "instagram","snap"],
    },
    user: { type: mongoose.Schema.Types.ObjectId,required:true, ref: "user" }
    
});

const socialModel = mongoose.model("socialMedia", socialSchema);
module.exports = socialModel;