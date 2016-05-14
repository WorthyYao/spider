var express = require('express');
var router = express.Router();
var mongodb=require('../dao/bookdb')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Spider' });
});

router.post('/',function(req,res,next){
    console.log(req.body)
    var collection_name=req.body.collection_name;
    mongodb.open(function(error,db){
     if(error) throw error ;
     db.collection(collection_name,{
         safe : true
     },function(err,collection){
         if(err) throw err ;
         collection.find().toArray(function(e,docs){
             if(e) throw e ;
             console.log(docs) ;
             res.send(docs)
         }) ; 
     }) ;
 }) ;
    
})


module.exports = router;



 