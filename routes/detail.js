var express = require('express');
var router = express.Router();
var mongodb=require('../dao/bookdb')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('detail', { title: 'Spider' });
});

router.post('/',function(req,res,next){
    console.log(req.body)
    var collection_name=req.body.collection_name;
    var page=req.body.page
    var nums=page*10-10
    mongodb.open(function(error,db){
     if(error) throw error ;
     db.collection(collection_name,{
         safe : true
     },function(err,collection){
         if(err) throw err ;
         collection.find().limit(10).skip(nums).toArray(function(e,docs){
             if(e) throw e ;
             //console.log(docs) ;
             res.send(docs)
         }) ; 
     }) ;
 }) ;    
})

module.exports = router;
