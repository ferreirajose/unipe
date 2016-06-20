module.exports = function(app){
    var controller = app.controllers.contatoController;
    
    
//    app.get('/contatos', controller.listaTodosContatos);
//    app.get('/contatos', controller.salvaContato);
    
    app.route('/contatos')
        .get(controller.listaTodosContatos)
        .post(controller.salvaContato);
    
    app.route('/contatos/:id')
        .get(controller.listaByIdContato)
        .put(controller.updateContato)
        .delete(controller.removeContato);
    
}