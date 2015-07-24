var myApp = angular.module('depict',[]);

myApp.controller('CategoriesController', ['$scope', function($scope) {

  // $scope.double = function(value) { return value * 2; };
  $scope.categories = ["Sports", "Nature", "Abstract", "Black & White"];

}]);
