const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
     name :{
        type:String,
        required:true,
     },
     price:{
        type:Number,
        required:[true,"Required field"],
     },
     featured:{
        type:Boolean,
        default:false,
     },
     rating:{
        type:Boolean,
        default:false,
     },
     createdAt:{
        type:Date,
        default:Date.now(),

     },
     company:{
        type:String,
        enum:{
            values:["apple","samsung","xiomi","dell","lenovo"],
            message:`{VALUE}  is not supported`,
        },
     },


});


module.exports=mongoose.model("Product",productschema);