var myApp = angular.module('depict',[]);

myApp.controller('CategoryController', ['$scope', function($scope) {
	
  function querySt(Key) {
    var url = window.location.href;
    KeysValues = url.split(/[\?&]+/);
    for (i = 0; i < KeysValues.length; i++) {
        KeyValue = KeysValues[i].split("=");
        if (KeyValue[0] == Key) {
            return KeyValue[1];
        }
    }
  }
  
  // $scope.double = function(value) { return value * 2; };
  $scope.category = querySt('category');
  
}]);