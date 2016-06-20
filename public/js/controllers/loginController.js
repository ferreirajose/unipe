angular.module('unipe').controller("LoginController", function ($scope, $http, $location, $rootScope) {
	$scope.usuario = {};
	$scope.msn = '';

	$scope.logar = function () {
		var usuario = $scope.usuario;
		console.log($scope.usuario);
		
		$http.post("/autenticar", {
			login: usuario.login,
			senha: usuario.senha
		}).then(function () {
			$location.path('/listacontatos');
		},function (error) {
			$scope.usuario = {};
			$scope.msn = "login ou senha invalido";
		});
	};
});