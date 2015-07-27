angular.module('depict')
  .controller('HomeController', function($scope, $location) {

    $scope.login = function () {
      $location.path("/Login");
    }

  });
