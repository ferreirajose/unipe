module.exports = function(app){
	var api = app.controllers.apiAuth;
    var apiUser = app.controllers.apiUsuario;
    var controller = app.controllers.contatoController;
	
	app.post('/autenticar', api.autenticar);
    
	app.route('/v1/usuario')
		.post(apiUser.adiciona)
		.get(apiUser.lista);

	app.route('/v1/usuario/:id')
		.delete(apiUser.remove)
		.get(apiUser.busca)
		.put(apiUser.atualiza);
    
    app.route('/contatos')
        .get(controller.listaTodosContatos)
    
	app.use('/*', api.verificarToken); // não distinção de verbo
	
};