
module.exports = function (app) {
	var Contato = app.models.modelContato;
    var controller = {};

    controller.listaTodosContatos = function (req, res) {
        Contato.find().exec().then(function (contato) {
            res.json(contato);
        }, function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        });
    };

    controller.listaByIdContato = function (req, res) {
        var _id = req.params.id;

        Contato.findById(_id).then(function (contato) {
            // caso o id não exisita no banco, receberemos null na resposta
            //if (!contato) throw new Error("contato não encontrado");
            res.json(contato);
        }, function (erro) {
            console.error(erro);
            res.status(404).json(erro);
            //res.status(404);
        });
    };

    controller.removeContato = function (req, res) {
        var id = req.params.id;
        Contato.remove({
            "_id": id
        }).then(function (contato) {
            res.end();
        }, function (erro) {
            console.error(erro);
            res.status(200).json(erro);
        });
    };

    controller.updateContato = function (req, res) {
        var id = req.body._id;
        Contato.findByIdAndUpdate(id, req.body).exec()
            .then(function (contato) {
                res.json(contato);
            }, function (erro) {
                console.error(erro)
                res.status(500).json(erro);
            });
    };

    controller.salvaContato = function (req, res) {
        Contato.create(req.body)
            .then(function (contato) {
                res.status(201).json(contato);
            }, function (erro) {
                console.log(erro);
                res.status.json(erro);
            });

    };


    return controller;
}