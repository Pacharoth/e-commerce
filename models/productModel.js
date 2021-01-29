const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    pname:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
    },
    pic:{
        type:File,
        required:true
    }
},{collection:"product"})
const product= mongoose.model("product",productSchema);
module.exports = product