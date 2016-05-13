//var contatos = [
//    {
//        _id: "ObjectId(560775b6f6f0bf241ce3e561)",
//        empresa: 'globo',
//        username: "zezinho",
//        email: "zezinho@unipe.com",
//        nome: "jose",
//        cep: "58090790",
//        rua: "irandir costa",
//        uf: "pb",
//        cidade: "joão pessoa",
//        bairro: "alto do mateus",
//        sobre: "re"
//    },
//    {
//        _id: 2,
//        empresa: 'ufpb',
//        username: "debora",
//        email: "zezinho@unipe.com",
//        nome: "debora",
//        cep: "58090790",
//        rua: "irandir costa",
//        uf: "pb",
//        cidade: "joão pessoa",
//        bairro: "jose americo",
//        sobre: "re"
//
//    }
//];
//var ID_CONTATO_INC = 3;

module.exports = function (app) {
    var Contato = app.models.contato;
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