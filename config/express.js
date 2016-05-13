var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

//var home = require('../app/routes/homeRouter');

module.exports = function () {
    var app = express();
    
    app.set('port', 4000);
    app.use(express.static('./public'));
    
    app.use(bodyParser.urlencoded({extend: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    app.set('view engine','ejs');
    app.set('views','./app/views');

    //app.use(app.router);
    
    load('models', {cwd:'app'})
        .then('controllers')
        .then('routes')
        .into(app);
    ;
    
    return app;
}