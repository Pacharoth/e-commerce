const Product = require('../models/productModel')
const path = require('path');
const fs = require('fs');
const { dirname } = require('path');
exports.createProduct=async(req,res)=>{
    let request = req.body
    let file = req.files.img
    console.log(file)
    let dataPath= './public/assets/storage/'
    let savePath='/assets/storage/'+req.session.userId+'/'+file.name
    if(!fs.existsSync(dataPath))fs.mkdirSync(dataPath);
    let dir = dataPath +req.session.userId+"/"
    let uploadPath = dir+file.name;
    console.log(request)
    if(!fs.existsSync(dir))fs.mkdirSync(dir);
    await file.mv(uploadPath).then(result=>{
        let product = new Product({
            pname:request.productname,
            detail:request.description,
            category:request.category,
            quantity:request.quantity,
            pic:savePath,
            instockAt:new Date()
        })
        product.save().then(result=>{
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
        result=>{
            fs.unlinkSync("./public"+result.pic);
            res.json({success:true})
        }
    ).catch(err=>res.json({success:false}))
}
exports.updateProduct = async(req,res)=>{
    let request=req.body
    await Product.findById(req.params.id).then(result=>{
        // console.log(result)
        result.pname = request.productname;
        result.quantity = request.quantity;
        result.detail=request.description;
        result.category = request.category;
        result.instockAt = new Date()
        result.save().then(resultUpdate=>{
            res.status(200).json(resultUpdate)
        }).catch(err=>{
            res.status(500).json(err)
        })
    }).catch(err=>{
        console.log(err)
        res.status(500).json()
    })
}
exports.getOneProduct = async(req,res)=>{
    await Product.findById(req.params.id).then(result=>{
        res.json(result);
    })
}