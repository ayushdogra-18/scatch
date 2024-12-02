const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    image:Buffer,
    name:String,
    price:Number,
    discount:{
        type:Number,
        default:0
    },
    bgcolor:String,
    isadmin:Boolean,
    pannelcolor:String,
    textcolor:String

});

module.exports=mongoose.model("product",productSchema);