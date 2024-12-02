const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const userModel=require("../models/user-model")

//from generateToken.js
// const {}=require("../utils/generateToken");
// const {generateToken} = require('../utils/generateToken');

//from authcontroller.js
const { resisterUser,loginUser,logout }=require("../controllers/authcontroller")


router.get("/",function(req,res){
    res.send("hey");
})



router.post("/register",resisterUser)
// resisterUser comes from authcontroller.js

router.post("/login",loginUser)

router.get("/logout",logout)

module.exports=router;