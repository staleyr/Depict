angular.module('depict')
  .controller('HomeController', function($scope, $location) {

    function login() {
      $location.path("/Login");
    }

  });
