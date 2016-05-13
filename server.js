var http = require('http');
var app = require('./config/express')(); // retorna uma função () 
require('./config/database.js')("mongodb://localhost/contatos_unipe");

http.createServer(app).listen(app.get('port'), function(){
   console.log('express serve escutando na porta: ' + app.get('port')); 
});


