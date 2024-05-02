const express = require("express");
const router = express.Router();
    const path=require('path');
const conn=require('../config/db');

router.get('/',(req,res)=>{
    console.log('누가 다녀옴');
    res.sendFile(path.join(__dirname,"..","react-project","build","index.html"))
})


module.exports=router;