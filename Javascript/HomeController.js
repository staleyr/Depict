var myApp = angular.module('depict',[]);

myApp.controller('HomeController', ['$scope', function($scope) {
	
  // $scope.double = function(value) { return value * 2; };
  $scope.depictCategories = ["Sports", "Nature", "Abstract", "Black & White"];
  
}]);