require('dotenv').config();
const mongoose = require("mongoose");

const URI = process.env.MONGOOSE_URL
// ********************
mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.once("open", ()=>{console.log("connected")});
