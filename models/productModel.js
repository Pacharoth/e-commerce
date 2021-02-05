const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    pname:{
        type:String,
        required:true,
    },
    detail:{
        type:String,
        default:"Please input product detail"
    },
    category:{
        type:String,
        default:"Please input category",
    },
    quantity:{
        type:Number,
        default:0,
    },
    pic:{
        type:String,
    },
    instockAt:{
        type:Date,
        required:true
    }
},{collection:"product"})
const product= mongoose.model("product",productSchema);
module.exports = product