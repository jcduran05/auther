app.factory('Signup', function($http){
	var Signup = {};

	Signup.signupUser = function(data){
		return $http.post('/api/signup', data)
		.then(function(newUser){
			return newUser
		})
	}
	return Signup
})