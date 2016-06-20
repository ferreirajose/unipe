angular.module('unipe', ['ngRoute', 'angular-filepicker'])
	.config(function ($routeProvider, $locationProvider, $httpProvider, filepickerProvider) {

		$httpProvider.interceptors.push('tokenInterceptor');

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
			}).when('/login', {
				templateUrl: 'views/login.html',
				controller: 'LoginController'
			}).when('/usuario/add', {
				templateUrl: 'views/cadastrar-usuario.html',
				controller: 'UsuarioController'
			});

		$routeProvider.otherwise({
			redirectTo: "/listacontatos"
		});

		//Add the API key to use filestack service
		filepickerProvider.setKey('Ap6vG8SHXTvS1CBZrLeLVz');
	});