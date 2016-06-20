var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');

module.exports = function () {
    var app = express();
    
    app.set('port', 4000);
	app.set('secret', 'unipe');	
	app.use(express.static('./public'));
    
    app.use(bodyParser.urlencoded({extend: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    app.set('view engine','ejs');
    app.set('views','./app/views');
	
	consign({cwd: 'app'})
		.include('models')
		.then('controllers')
		.then('routes/routerAuth.js')
		.then('routes')
		.into(app);
    
    return app;
}
