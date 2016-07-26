angular.module("IfOpenDoorsApp").controller("addPessoaCtrl", function ($scope, $http) {
  $scope.escolha = {};

  $scope.cpf= function(cpf) {
    cpf = cpf.replace(/[^0-9]/g,'')

    if(cpf.length>3)
      cpf = cpf.substring(0, 3) + '.' + cpf.substring(3);
    if(cpf.length>7)
      cpf = cpf.substring(0, 7) + '.' + cpf.substring(7);
    if(cpf.length>11)
      cpf = cpf.substring(0, 11) + '-' + cpf.substring(11,13);

    $scope.pessoa.cpf = cpf;
  };

  $scope.addPessoa = function (pessoa) {
    $http.post("http://localhost:8080/IFOpenDoors_SERVICE/person/insert", pessoa).success(function (data) {
      delete $scope.pessoa;
      delete $scope.senhaVer;
    });
  };

  $scope.ok = function (pessoa) {
    if (pessoa.name && pessoa.cpf && pessoa.email && pessoa.password)    {
      return false;
    }
    return true;
  };
});