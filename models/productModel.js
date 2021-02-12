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
        required:true,
    }
},{collection:"product"})
const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
    },
    orderDate:{
        type:Date,
        required:true,
    },
    status:{
        type:String,
        default:"In progress",
    },
    requiredDate:{
        type:Date,
        default:null,
    },
    shippedDate:{
        type:Date,
        default:null,
    },
});
const Order = mongoose.model("order",orderSchema);
const Product= mongoose.model("product",productSchema);
module.exports = {Product,Order}