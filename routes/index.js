const express=require('express');
const router=express.Router();
const isloggedin=require("../middlewares/isLoggedIn");
const { logout } = require('../controllers/authcontroller');
const productsModel = require('../models/products-model');



router.get("/", (req, res) => {
    const error = req.flash("error"); 
    res.render("index", { error });
});


router.get("/shop",isloggedin,async(req,res)=>{
   let products = await productsModel.find();
    res.render("shop",{products});
})



// router.get("/shop", isloggedin, (req, res) => {
//     // Fetch or define your products data here
//     const products = [
//         { name: 'Product 1', price: 100, bgcolor: 'red', panelcolor: 'blue', textcolor: 'white', image: 'image_data_here' },
//         { name: 'Product 2', price: 200, bgcolor: 'green', panelcolor: 'yellow', textcolor: 'black', image: 'image_data_here' }
//         // More product objects
//     ];

//     // Pass products data to the view
//     res.render('shop', { products });
// });





module.exports=router;