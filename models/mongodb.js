/*var mongodb = require('mongodb');
var server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var db = new mongodb.Db('qihaoduo', server, {safe:true});*/
var mongoose =require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/qiubai');
module.exports = mongoose;