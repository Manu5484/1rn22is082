const express=require("express");
const { getallAvg, postnumbers } = require("../controller/average");
const router=express.Router();

router.get("/getallnumsandavg",getallAvg)
router.post("/getallnumsandavg",postnumbers)

module.exports=router;