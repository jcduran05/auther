'use strict';

app.factory('Login', function ($http) {
  var Login = {};

  Login.loginUser = function(data) {
    return $http.post('/api/login', data)
    .then(function(user) {
      return user;
    });
  };

  return Login;
});
