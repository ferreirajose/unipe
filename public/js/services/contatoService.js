angular.module('unipe').factory('contatoFactory', function ($http) {

    var urlBase = '/contatos';
    var contatoFactory = {};

    contatoFactory.getCustomers = function () {
        return $http.get(urlBase);
    };

    contatoFactory.getCustomer = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    contatoFactory.insertCustomer = function (cust) {
        return $http.post(urlBase, cust);
    };

    contatoFactory.updateCustomer = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    contatoFactory.deleteCustomer = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    return contatoFactory;
    

});
