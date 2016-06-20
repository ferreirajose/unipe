module.exports = function(app){
    var controller = app.controllers.contatoController;
        
    app.route('/contatos')
        .post(controller.salvaContato);
    
    app.route('/contatos/:id')
        .get(controller.listaByIdContato)
        .put(controller.updateContato)
        .delete(controller.removeContato);
    
}