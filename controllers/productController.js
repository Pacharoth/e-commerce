const Product = require('../models/productModel')
const path = require('path');
const fs = require('fs');
const { dirname } = require('path');
exports.createProduct=async(req,res)=>{
    let request = req.body
    let file = req.files.img
    let dataPath= './public/assets/storage/'
    if(!fs.existsSync(dataPath))fs.mkdirSync(dataPath);
    let dir = dataPath +req.session.userId+"/"
    let uploadPath = dir+file.name
    console.log(request)
    if(!fs.existsSync(dir))fs.mkdirSync(dir);
    await file.mv(uploadPath).then(result=>{
        let product = new Product({
            pname:request.productname,
            detail:request.description,
            category:request.category,
            quantity:request.quantity,
            pic:uploadPath,
            instockAt:new Date()
        }).save().then(result=>{
            console.log(result)
            res.json(result)
        }).catch(err=>{
            console.log(err)
        });
    }).catch(err=>{
        res.json({file:false})
    })
}
exports.getProducts = async(req,res)=>{
    await Product.find().then(result=>{
        res.json(result)
    }).catch(err=>{
        res.json({err:true})
    })
}
exports.deleteProduct=async(req,res)=>{
    await Product.findByIdAndRemove(req.params.id).then(
        res.json({success:true})
    ).catch(err=>res.json({success:false}))
}