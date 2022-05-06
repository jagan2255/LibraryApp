const express = require('express'); 
const signupRouter = express.Router();
const user = require('../data/user');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

// Part #2 Point 10 
signupRouter.post("/adduser",function(req,res){
    
    var newuser = {
        "uid":req.body.uid,
        "pwd":req.body.pwd
    };
    console.log(newuser);
    user.push(newuser);
    console.log(user);
    res.redirect("/login");
})

module.exports = signupRouter;