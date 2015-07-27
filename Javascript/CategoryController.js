var myApp = angular.module('depict');

myApp.controller('CategoryController', ['$scope', function($scope, $routeParams) {

  $scope.category = $routeParams.category;

}]);
