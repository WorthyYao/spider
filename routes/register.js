var express=require('express');
var crypto=require('crypto');
var user=require('../dao/user');
var router=express.Router();

router.get('/',function(req,res,next){
	res.render("register",{title:'User register'});
})

router.post('/',function(req,res,next){
	var md5=crypto.createHash('md5');
	var password=md5.update(req.body.password).digest('base64')
	console.log(password);
})

module.exports=router;