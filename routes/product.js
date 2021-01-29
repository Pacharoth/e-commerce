const express = require('express');
const route = express.Router();
const multer = require('multer')
const upload = multer({des:'storage/'})
const productController = require('../controllers/productController')
route.post('/product',upload.single('product'),productController.createProduct);
module.exports=route