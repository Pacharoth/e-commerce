const {user,comment} = require('../models/userModel');
const bcrypt = require('bcrypt');
exports.getDashboard = async(req,res)=>{
    if(req.session.userId){
        res.render('dashboard')
    }else{
        res.render('dashboard')
    }
}
exports.loginUser = async(req,res)=>{
    let request= req.body;
    console.log(request)    
    await user.findOne({email:request.email}).then(result=>{
        if(result){
            bcrypt.compare(request.password,result.password).then(
                passwordMatch=>{
                    console.log(passwordMatch)
                    if(passwordMatch){
                        res.cookie('username',result.username,{expire:3600*1000*24});
                        res.cookie('logged-time',new Date().toISOString(),{expire:3600*1000*24});
                        req.session.userId = result._id;
                        req.session.username= result.username;
                        req.session.email = result.email;
                        console.log(req.session.userId)
                        res.json({password:true,user:true,res:req.session.userId})
                    }else{
                        res.json({password:false,user:true})
                    }
                }
            ).catch(err=>{
                console.log(err);
                res.json({password:false,user:true});
            })
        }else{
            res.json({password:false,user:false});
        }
        
    }).catch(err=>{
        res.json({user:false,password:false})
    })
}
exports.registerUser = async(req,res)=>{
    let request = req.body
    console.log(request)
    let salt = bcrypt.genSaltSync(10);
    const userAccount = new user({
        username:request.username,
        email:request.email,
        password:bcrypt.hashSync(request.password,salt),
        createdAt: new Date,
    });
    await userAccount.save().then(result=>{
        console.log("successful saved");
        res.json({"success":true})

    }).catch(err=>{
        console.log(err);
        res.status(400).json({"success":false});
    })
}
exports.getEmail = async(req,res)=>{
    
    await user.findOne({email:req.body.email}).then(result=>{
        if(result){
            res.json({email:false})
        }
        res.json({email:true})
    }).catch(err=>{
        res.json({email:true})
    })
}
exports.getUser = async(req,res)=>{
    await user.findOne({user:req.body.username}).then(result=>{
        if(result)res.json({username:false})
        res.json({username:true})
    }).catch(err=>{
        res.json({username:true})
    })
}
exports.logout=async(req,res)=>{
    
    if(req.session.userId){
        // req.logout();
        req.session.destroy();
        res.clearCookie('username');
        return res.json({success:true})
    }else{
        return res.json({success:false})
    }
}
exports.getSession=async(req,res,next)=>{
    console.log(req.session)
    console.log(req.session.userId);
    if(req.session.userId)res.json({session:req.session.userId,
        username:req.session.username,email:req.session.email})
    else res.json({session:false})
    
}
exports.postComment=async(req,res)=>{
    console.log(req.body)
    const newcomment = new comment({
        user:req.session.userId,
        comment:req.body.comment,
        DateComment:new Date,
        product:req.body.pid,
    });
    await newcomment.save().then(async(result)=>{
        await comment.findById(result._id).populate('user').exec()
        .then(resultone=>{
            console.log(resultone)
            res.json(resultone)
        }).catch(err=>{
            console.log(err);
            res.json({result:false})
        })
    }).catch(err=>{
        console.log(err);
        res.json(result)
    })

}
exports.getComment = async(req,res)=>{
    console.log(req.params.id)
    await comment.find({product:req.params.id}).populate('user').populate('product').exec().then(
        result=>{
            res.json(result)
        }
    ).catch(err=>{
        res.json({result:false});
    })
}