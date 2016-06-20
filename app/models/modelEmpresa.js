var mongoose = require("mongoose");

module.exports = function(){
	var schema = mongoose.Schema({
		nome: {
			type: String	
		},
		praias:{
			nome:{
				type: String
			},
			lojas: [{
				nome:{type: String},
				descricao:{type: String},
				imagem:{type: String},
				formaPagamentoUm:{type: String},
				formaPagamentoDois:{type: String},
				endereco:{type: String},
				telefoneUm:{type: Number},
				telefoneDois:{type: Number}
			}]
		}
	});
	
	mongoose.set("debug", true);
	return mongoose.model("Empresa", schema);
}