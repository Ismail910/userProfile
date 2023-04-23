
const mongoose = require('mongoose');

const socialSchema = mongoose.Schema({
    name:{
        require:true,
        type: String,
        enum: ["Facebook", "twitter", "Instagram","Snapchat","Whatsapp","Linkedin","Youtube","Tiktok","Twitter"],
    },
    link:{
        type: String,
        require:true
    },
    
    
});

const socialModel = mongoose.model("socialMedia", socialSchema);
module.exports = socialModel;