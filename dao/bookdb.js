var mongodb = require("mongodb") ;
var server = new mongodb.Server("localhost",27017,{
     auto_reconnect : true
 }) ;

 

 
  
 
module.exports = new mongodb.Db("douban", server, {safe: true});