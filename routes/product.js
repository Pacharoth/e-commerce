const express = require('express');
const fileUpload = require('express-fileupload')
const route = express.Router();
const productController = require('../controllers/productController')
// route.use(fileUpload())
route.post('/product',productController.createProduct);
route.get('/products',productController.getProducts);
route.post('/poduct/:id',productController.deleteProduct);
module.exports=route