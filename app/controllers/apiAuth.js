var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

module.exports = function (app) {
	var Usuario = app.models.modelUsuario;
	var api = {};

	api.autenticar = function (req, res) {
		Usuario.findOne({
			login: req.body.login,
			senha: req.body.senha
		}).then(function (usuario) {
			// verificar se o usuario exisite
			if (!usuario) {
				console.log("Usuario ou senha invalidos");
				res.sendStatus(401);
			} else {
				// criando token para permitir acesso
				var token = jwt.sign({
					login: usuario.login
				}, app.get('secret'), {
					expiresIn: 86400 // valor em segundo, aqui temos um total de 24 horas
				});

				console.log('Autenticado: token adicionado na resposta');
				res.set('x-access-token', token); // adicionando token no cabeçalho de resposta
				res.end(); // enviando a resposta

			}
		}, function (error) {
			console.log("Usuario ou senha invalidos");
			res.sendStatus(401);
		});

		console.log('autenticar')
	};
	
	api.verificarToken = function (req, res, next) {

		var token = req.headers['x-access-token']; // busca o token no header da requisição

		if (token) {
			console.log('Token recebido, decodificando');
			jwt.verify(token, app.get('secret'), function (err, decoded) {
				if (err) {
					console.log('Token rejeitado');
					return res.sendStatus(401);
				} else {
					console.log('Token aceito')
					// guardou o valor decodificado do token na requisição. No caso, o login do usuário.
					req.usuario = decoded;
					next();
				}
			});
		} else {
			console.log('Nenhum token enviado');
			return res.sendStatus(401);
		}
	}

	return api;
};