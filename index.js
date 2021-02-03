const express = require('express');
const session =  require('express-session');
const app = express();
const redis = require('redis');
const cors=require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
let RedisStore = require('connect-redis')(session);
let redisClient=redis.createClient();
const path = require('path');
const bodyParser= require("body-parser");
const routerUser = require('./routes/user');
const fs = require('fs');
const multer = require('multer')
const upload=multer();
const routeProduct = require('./routes/product');
const fileUpload =require('express-fileupload');
app.set('view engine','ejs');
app.set('views','views');
app.use(cookieParser());
app.use(session({
    store: new RedisStore({client:redisClient}),
    secret:'this is secret',
    cookie:{
        path:"/",
        httpOnly:true,
        maxAge:1000*60*60*24,//24h expire
        secure:false,
    },
    name:"sid",
}))
app.use(cors());
app.use(fileUpload({
    limits:{fileSize:200*1024*1024}
}))
app.use(express.static(path.join(__dirname,"public")))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(upload.array());
app.use(routerUser);
app.use(routeProduct)
mongoose.connect("mongodb://localhost:27017/ecommerce?readPreference=primary&appname=MongoDB%20Compass&ssl=false").then(result=>{
    console.log("DB is connected");

}).catch(err=>{
    console.log("cant connect to mongo");
})
app.listen(3000)