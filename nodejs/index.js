const express = require("express");
const env = require("./config/envConfig")
const app = express();
const port = env.PORT || 3000 ;
const connect = require('./config/db');
const cors = require("cors");
const mongoose = require('mongoose');
const URL = "mongodb://127.0.0.1:27017" ;


app.use(express.json());


app.use(cors());


const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRouters');
const socialRoutes = require('./routes/socialMediaRouters');
const businessRoutes = require('./routes/businessRouters');

app.use('/admin', adminRoutes);
app.use('/business', businessRoutes );
app.use('/social', socialRoutes );
app.use('/user', userRoutes );


// connect();

mongoose.connect(`${URL}/userProfile`).then(()=>{
   console.log('Connected to MongoDB');
}).catch(err=>{
   console.error(err);
})


 app.listen(port , ()=>{
    console.log(`Your serverw is runing at port number : ${port}`);
 });