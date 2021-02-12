const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        required:true,
    },
    role:{
        type:String,
    },
    comment:[{
        type:mongoose.Schema.ObjectId,
        ref:"comment",
    }]
},{collection:"user"})
const commentSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    comment:{
        type:String,
    },
    DateComment:{
        type:Date,
    },
    product:{
        type:mongoose.Schema.ObjectId,
        ref:'product',
    }
},{collection:"comment"})
const user = mongoose.model("user",userSchema);
const comment =mongoose.model("comment",commentSchema);
module.exports = {user,comment}