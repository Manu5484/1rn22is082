const mongoose=require("mongoose");

const numbers=new mongoose.Schema({

    numbers:{
        type:[Number],
        required:true
    },
    average:{
        type:Number,
    }
})

module.exports=mongoose.model("numbersModel",numbers);