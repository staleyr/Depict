angular.module('depict')
  .controller('LoginController', function($scope, $auth) {

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function() {
          alert({
            content: 'You have successfully logged in',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        })
        .catch(function(response) {
          alert({
            content: response.data ? response.data.message : response,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };

  });
