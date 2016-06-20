module.exports = function (app) {
	var Usuario = app.models.modelUsuario;
	var apiController = {};


	apiController.adiciona = function (req, res) {

		console.log(req.body)

		Usuario.create(req.body)
			.then(function (usuario) {
				res.status(201).json(usuario);
			}, function (erro) {
				console.log(erro);
				res.status.json(erro);
			});

	};


	apiController.lista = function (req, res) {
		Usuario.find({})
			.then(function (fotos) {
				res.json(fotos);
			}, function (error) {
				res.status(500).json(error);
			});	
	};

	apiController.remove = function (req, res) {
		//console.log(req.params.id)

		var id = req.params.id;
		Usuario.remove({
			"_id": id
		}).then(function (foto) {
			res.end();
		}, function (erro) {
			console.error(erro);
			res.status(200).json(erro);
		});

	};

	apiController.busca = function (req, res) {
		var id = req.params.id;

		Usuario.findById(id).then(function (foto) {
			// caso o id não exisita no banco, receberemos undefined na resposta
			if (!foto) throw new Error("foto não encontrado");
			res.json(foto);
		}, function (erro) {
			console.error(erro);
			res.status(404).json(erro);
		});

	};

	apiController.atualiza = function (req, res) {
		var id = req.body._id;
		Usuario.findByIdAndUpdate(id, req.body).exec()
			.then(function (foto) {
				res.json(foto);
			}, function (erro) {
				console.error(erro)
				res.status(500).json(erro);
			});

	};
	
	return apiController;
}