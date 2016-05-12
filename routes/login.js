var express = require('express');
var router = express.Router();
var User=require('../dao/user');
var crypto = require('crypto'); 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("login",{title:'User Login'});
});

router.post('/',function(req,res,next){
    console.log(req.body)
	var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');

 User.get(req.body.username, function(err, user) {
     console.log('err')
 if (!user) {
     console.log('user err')
 return res.redirect('/login');
 }
 if (user.password != password) {
     console.log('password err')
 return res.redirect('/login');
 }
 res.redirect('/home');
 }); 
});

module.exports = router;
