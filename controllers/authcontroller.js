
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const userModel=require("../models/user-model")
//from generateToken.js
const {generateToken} = require('../utils/generateToken');

module.exports.resisterUser= async function(req,res){
    try{
   let{email,password,fullname}=req.body;
   
        //check if user create new with same email
        
        let user=await userModel.findOne({email:email});
        if(user){
            return res.send("user have already account");
        }


       bcrypt.genSalt(10,function(err,salt){
           bcrypt.hash(password,salt,async function(err,hash){
               if(err)
                   {
                    return  res.send(err.message);
                   } 
                   else{
                       let user = await userModel.create({
                           email,
                           password:hash,
                           fullname,
                          })

                       // let token=jwt.sign({email,id:user._id},"heyhey");
                       let token=generateToken(user);
                       res.cookie("token",token);
                       //res.send(token);
                       res.send("user create succesfully")
                   }
           })
           })
           

  
}catch(err){
  res.send(err);
   
}
}

module.exports.loginUser=async function (req,res){
    let{email,password}=req.body;

 let user=await userModel.findOne({email:email})
    if(!user){
        return res.send("Email or password incorrect");
    }
    bcrypt.compare(password,user.password,function(err,result){
        //res.send(result);
        if(result){
        let token=generateToken(user);
        res.cookie("token",token);
        res.redirect("/shop");
        }else{
            res.send("EMail or password incorrect");
        }
    })
    }


    module.exports.logout=function(req,res){
        res.cookie("token","");
        res.redirect("/");
    }