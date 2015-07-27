var myApp = angular.module('depict');

myApp.controller('CategoryController', ['$scope', '$routeParams', function($scope, $routeParams) {

  $scope.category = $routeParams.category;

}]);
