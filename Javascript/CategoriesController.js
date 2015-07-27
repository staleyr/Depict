var myApp = angular.module('depict');

myApp.controller('CategoriesController', ['$scope', function($scope) {

  $scope.categories = ["Sports", "Nature", "Abstract", "Black And White"];

}]);
