var mongoose = require("mongoose"); // Instalando dependência

module.exports = function (uri) {

    mongoose.connect(uri);


    mongoose.connection.on("connected", function () {
        console.log("Mongoose! Connecting em: " + uri);
    });

    mongoose.connection.on("disconnected", function () {
        console.log("Mongoose! Disconnected: " + uri);
    });

    mongoose.connection.on("error", function () {
        console.log("Mongoose! Erro na conexão: " + uri);
    });

    // Fechando conexão como o MongoDB
    // process OBJ GLOBAL disponivel pelo NODE.JS
    process.on("SIGINT", function () {
        mongoose.connection.close(function () {
            console.log("Mongoose! Desconectado pelo término da aplicação");

            // O indica que a finalização ocorreu sem erros
            process.exit(0);
        });
    });
}