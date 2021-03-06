const express = require('express');
const fileUpload = require('express-fileupload')
const route = express.Router();
const productController = require('../controllers/productController')
// route.use(fileUpload())
route.post('/product',productController.createProduct);
route.get('/products',productController.getProducts);
route.delete('/product/:id',productController.deleteProduct);
route.put('/product/:id',productController.updateProduct);
route.get('/product/:id',productController.getOneProduct);
route.get('/categories/:id',productController.categoryProduct);
module.exports=route