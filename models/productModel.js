const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    pname:{
        type:String,
        required:true,
    },
    detail:{
        type:String,
    },
    price:{
        type:Number,
        default:null,
    },
    quantity:{
        type:Number,
        default:0,
    },
    pic:{ data: Buffer, 
        contentType: String },
    instockAt:{
        type:Date,
        // required:true
    }
},{collection:"product"})
const product= mongoose.model("product",productSchema);
module.exports = product