
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const itemrouter = require('./routes/items');

const getItemrouter = require('./routes/retrieve_items');
const userRouter = require('./routes/user');
require('dotenv').config();

const PORT = process.env.PORT || 5052;
const app = express();

// import mongoose
require('./DB/mongoose.js')

app.use(cors());
app.use(bodyparser.json())

app.use(itemrouter)
app.use(getItemrouter);
app.use(userRouter);

app.get('/test', (req, res)=>{
    res.send("test command is working");
})
app.listen(PORT, ()=> {console.log("The server is runnin on", PORT)});