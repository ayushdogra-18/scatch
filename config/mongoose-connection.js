const moongose=require('mongoose');
const config=require("config")
const dgbr=require("debug")("development:mongoose");

  moongose.connect(`${config.get("MONGODB_URI")}/scatch`)
  .then(function(){
    dgbr("connected");
  
  })
  .catch(function(err){
    console.log(err);
    
  })

  module.exports=moongose.connection;