module.exports = function(app){
	var api = app.controllers.apiAuth;
	
	app.post('/autenticar', api.autenticar);
	app.use('/*', api.verificarToken); // não distinção de verbo
	
};