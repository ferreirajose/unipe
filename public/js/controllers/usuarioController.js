angular.module('unipe').controller("UsuarioController", function ($scope, $http, $routeParams) {
	$scope.user = {};
	$scope.msn = '';

	console.log("Id do obj: " + $routeParams.id);
	var id = $routeParams.id;

	if (id) {
		$http.get("v1/usuario/" + id).success(function(r) {
			$scope.user = r;
		}).error(function(erro) {
			$scope.msn = "Error: " + erro;
		});
	}

	$scope.cadUse = function() {
		console.log($scope.user);
		if ($scope.user._id) {
			console.log($scope.user._id);
			console.log($scope.user);

			$http.put("v1/usuario/" + $scope.user._id, $scope.user).success(function() {
				$scope.msn = 'Atualizado com Sucesso';
			}).error(function(erro) {
				$scope.msn = "Error: " + erro;
			});
		} else {
			$http.post("v1/usuario", $scope.user).success(function() {
				$scope.user = {};
				$scope.msn = 'Cadastrado com Sucesso';
			}).error(function(erro) {
				$scope.msn = "Error: " + erro;
			});
		}

	};

	
});