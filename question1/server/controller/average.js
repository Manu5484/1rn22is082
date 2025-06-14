const numbersModel = require("../models/numbersModel")

async function getallAvg(req,res) {

    try{

        const avgDetails=await numbersModel.find({});

        res.status(200).json({
            success:true,
            message:"avg fetched successfully",
            avgDetails
        })

    }catch(error)
    {
        res.status(500).json({
            success:false,
            message:"unable to fetch avg ",
            error:error.message
        })
    }
    
}

async function postnumbers(req,res) {
    try{

        const {numbers}=req.body;

        if (!Array.isArray(numbers) || numbers.length === 0) {
            return res.status(400).json({ 
                error: ' fill all deatils ' 
            });
        }

        const sums = numbers.reduce((total, num) => total + Number(num), 0);
        const avg = sums / numbers.length;

        const updateddata=await numbersModel.create({numbers,average:avg});

         res.status(200).json({
            success:true,
            message:"avg uccessfully",
            updateddata
        })

    }catch(error)
    {
        res.status(500).json({
            success:false,
            message:"unable to post numbers ",
            error:error.message
        })
    }
}

module.exports={
    getallAvg,
    postnumbers
}