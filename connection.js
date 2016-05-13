var MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;

var id = new ObjectID("5701d91ad3f0252914d3d603");

MongoClient.connect("mongodb://127.0.0.1:27017/contatos_unipe",
    function(error, db){
      if(error) throw error;
      db.collection("contatos").find({_id: id}, function(erro, contato){
          if(error) throw error;
          console.log(contato);
      });
    }
);