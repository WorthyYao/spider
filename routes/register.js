var express=require('express');
var crypto=require('crypto');
var User=require('../dao/user');
var router=express.Router();

router.get('/',function(req,res,next){
	res.render("register",{title:'User register'});
})

router.post('/',function(req,res,next){
    console.log(1)
	console.log(req.body)
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');

    var newUser = new User({
        name: req.body.username,
        password: password,
    }); 
    
    console.log(newUser.name) 
        //检查用户名是否已经存在
    User.get(newUser.name, function(err, user) {
        console.log('hello')
    if (user)
    err = 'Username already exists.';
    if (err) {
        console.log("get err")
    return res.redirect('/register');
    }
    //如果不存在则新增用户
    newUser.save(function(err) {
        console.log('save')
    if (err) {
        console.log('save err')
        return res.redirect('/register');
    }
	 res.redirect('/home');
	 });
     });
 }); 

module.exports=router;