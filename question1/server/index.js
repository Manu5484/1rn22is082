const express=require("express");
const connectDB = require("./config/connectDB");
const app=express();
const cors = require('cors');
const router = require("./routes/router");

require("dotenv").config();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api",router);

app.listen(process.env.PORT,()=>{
    console.log("app started successfully");
})

app.get('/',(req,res)=>{
    res.send("home page");
})

