app.factory('Logout', function($http){
	var Logout = {};

	Logout.logoutUser = function(){
		return $http.get('/api/logout')
		.then(function(data){
			console.log(data, 'from the logout')
		})
	}
	return Logout
})