
const mongoose = require('mongoose');

const socialSchema = mongoose.Schema({
    name:{
        require:true,
        type: String,
        enum: ["facebook", "twitter", "instagram","snap"],
    },
    link:{
        type: String,
        require:true
    },
    user: { type: mongoose.Schema.Types.ObjectId,required:true, ref: "user" }
    
});

const socialModel = mongoose.model("socialMedia", socialSchema);
module.exports = socialModel;