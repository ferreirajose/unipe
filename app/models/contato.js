// O mongoDB não trabalha com schema.

/*
	É por isso que o Mongoose possui o objeto Schema,
	que define a estrutura de qualquer documento que será armazenado em uma
	collection do MongoDB. Ele permite definir tipos e validar dados.
*/
var mongoose = require("mongoose");

module.exports = function () {
    var schema = mongoose.Schema({
        empresa: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        nome: {
            type: String,
            required: true
        },
        foto: {
            type: String,
        },
        cep: {
            type: Number,
            required: true
        },
        rua: {
            type: String,
            required: true
        },
        uf: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        bairro: {
            type: String,
            required: true
        },
        sobre: {
            type: String,
            required: true
        }

    });

    /*
    	Um Model é um objeto que corresponde a uma collection de nosso
    	banco e utiliza o Schema usado em sua criação para validar qualquer docu-
    	mento que tenhamos na collection.
    */
    mongoose.set("debug", true);
    return mongoose.model("Contato", schema); // Retorna um model criando aparti do SCHEMA, cria uma collections como o nome contato 


}