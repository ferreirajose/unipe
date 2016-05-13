angular.module('unipe').controller("contatosController", function ($scope, $routeParams, $http, contatoFactory) {


    $scope.contatos = [];
    $scope.files = [];

    type = ['success', 'danger'];

    var id = $routeParams.id;

    $scope.autoCompletAddress = function (cep) {
        var headers = {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Origin': '*'
        }

        $http.get("https://viacep.com.br/ws/" + cep + "/json/").success(function (data) {

            $scope.contato.rua = data.logradouro;
            $scope.contato.uf = data.uf;
            $scope.contato.cidade = data.localidade;
            $scope.contato.bairro = data.bairro;

        }).error(function (jqXHR, xhr, status, error) {
            switch (xhr) {
            case 404:
                msn = "Solicitação Não Encontrada"
                showNotification('top', 'center', msn, 1);
                break;
            case 401:
                msn = "Acesso não autorizado"
                showNotification('top', 'center', msn, 1);
                break;
            case 403:
                msn = "Permissão de Acesso negado"
                showNotification('top', 'center', msn, 1);
                break;
            case 305:
                msn = "O recurso solicitado deve ser acessado através do Proxy"
                showNotification('top', 'center', msn, 1);
                break;
            };

        });

    };

    var showNotification = function (from, align, msn, statusCode) {
        color = statusCode;
        $.notify({
            icon: "pe-7s-gift",
            message: msn

        }, {
            type: type[color],
            timer: 3000,
            placement: {
                from: from,
                align: align
            }
        });
    }

    $scope.onSuccess = function (Blob){
        console.log(Blob);
        $scope.contatos.push(Blob);  
        $scope.$apply();      
    };
    
    
    $scope.insertCustomer = function (contato) {
        console.log(contato)        
        contatoFactory.insertCustomer(contato).then(function (response) {
            // atualiza a lista de contatos
            getCustomers();
            showNotification('top', 'center', "salvo com sucesso", 0);
        }, function (error) {
            console.log('erro ao inserir contato: ' + error.message);
        });
    };

    $scope.updateCustomer = function (contato) {
        console.log(contato);
        contatoFactory.updateCustomer(contato)
            .then(function (response) {
                showNotification('top', 'center', "atualizado com sucesso", 0);
            }, function (error) {
                console.log('erro ao atualizar contato: ' + error.message);
            });
    };

    $scope.deleteCustomer = function (id) {
        contatoFactory.deleteCustomer(id).then(function (response) {
            // atualiza a lista de contatos
            getCustomers();
            showNotification('top', 'center', "removido com sucesso", 0);
        }, function (error) {
            console.log('erro ao deletar contato: ' + error.message);
        });
    };


    var getByIdContato = function () {
        if (!id) return false; // não erro no console
        contatoFactory.getCustomer(id).then(function (response) {
            $scope.contato = response.data;
        }, function (error) {
            console.log('errro: ' + error);
        });
    };


    var getCustomers = function () {
        contatoFactory.getCustomers().then(function (response) {
            $scope.contatos = response.data;
        }, function (error) {
            console.log('erro ao listar todos os contatos: ' + error.message);
        });
    }

    $scope.init = function () {
        getByIdContato();
        getCustomers();
    }

    $scope.init();

});