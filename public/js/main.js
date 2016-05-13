angular.module('unipe', ['ngRoute','angular-filepicker']).config(function ($routeProvider, filepickerProvider) {
    $routeProvider
        .when('/listacontatos', {
            templateUrl: "views/listacontatos.html",
            controller: "contatosController"
        })
        .when('/contato/:id', {
            templateUrl: "views/contato.html",
            controller: "contatosController"
        }).when('/update/:id', {
            templateUrl: "views/update.html",
            controller: "contatosController"
        });

    $routeProvider.otherwise({
        redirectTo: "/home"
    });

    //Add the API key to use filestack service
    filepickerProvider.setKey('Ap6vG8SHXTvS1CBZrLeLVz');
});