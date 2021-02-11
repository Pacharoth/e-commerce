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
        default:"user",
    },
    comment:{
        type:mongoose.Schema.ObjectId,
        ref:"comment",
    }
},{collection:"user"})
const commentSchema = new mongoose.Schema({
    comment:{
        type:String,
    },
    DateComment:{
        type:Date,
    }
},{collection:"comment"})
const user = mongoose.model("user",userSchema);
const comment =mongoose.model("comment",commentSchema);
module.exports = {user,comment}