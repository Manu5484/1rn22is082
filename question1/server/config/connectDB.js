const mongoose=require("mongoose");

require("dotenv").config();

function connectDB()
{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("data base connected successfully");
    }).catch(()=>{
        console.log("unable to connect to DB")
    })
}

module.exports=connectDB;