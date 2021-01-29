const user = require('../models/userModel');
const bcrypt = require('bcrypt');
exports.getDashboard = async(req,res)=>{
    res.render('dashboard');
}
exports.loginUser = async(req,res)=>{
    let request= req.body;
    await user.findOne({email:request.email}).then(result=>{
        bcrypt.compare(request.password,result.password).then(
            passwordMatch=>{
                if(passwordMatch){
                    res.cookie('username',request.username,{expire:3600*1000*24});
                    res.cookie('logged-time',new Date().toISOString(),{expire:3600*1000*24});
                    req.session.userId = result._id
                    res.json({"success":true})
                }
            }
        ).catch(err=>{
            console.log(err);
            res.json({"success":false});
        })
    })
}
exports.registerUser = async(req,res)=>{
    let request = req.body
    let salt = bcrypt.genSaltSync(10)
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