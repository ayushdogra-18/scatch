const express=require('express');
const router=express.Router();

const ownerModel=require("../models/owner-model");


router.get("/",function(req,res){
    //res.send("hey");
    res.render('owner-login.ejs');
})

console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV === "development"){
router.post("/create",async(req,res)=>{
    let owners=await ownerModel.find();
    if(owners.length>0){
        return res.send("you dont have permission for this");
    }
    let { fullname,email,password }=req.body;
    let createdOwner=await  ownerModel.create({
        fullname,
        email,
        password,
        
    })
    res.send("Owner created:"+createdOwner); 
})
}

// router.get("/admin",function(req,res){
//     res.render("createproducts");
// })

router.get('/admin', (req, res) => {
  let success= req.flash("success");
   res.render("createproducts",{success});
});

module.exports=router;