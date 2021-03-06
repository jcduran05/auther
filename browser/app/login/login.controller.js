'use strict';

app.controller('LoginCtrl', function ($scope, Login, $state) {
    $scope.submit = function() {
      var jsonData = {
        email : $scope.loginForm.email,
        password: $scope.loginForm.password
      };

      var login = Login.loginUser(jsonData);

      login.then(function(data) {
       if(data.status == 204){
          $state.go('stories') 
       }
      })
    }
});
