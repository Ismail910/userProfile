const express = require("express");
const env = require("./config/envConfig")
const app = express();
const port = env.PORT || 3000 ;
const connect = require('./config/db');
const cors = require("cors");
 


app.use(express.json());


app.use(cors());




const userRoutes = require('./routes/userRoutes');
const socialRoutes = require('./routes/socialMediaRouters');
const businessRoutes = require('./routes/businessRouters');

app.use('/business', businessRoutes );

app.use('/social', socialRoutes );

 
app.use('/user', userRoutes );


connect();

 app.listen(port , ()=>{
    console.log(`Your serverw is runing at port number : ${port}`);
 });