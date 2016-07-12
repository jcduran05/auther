app.controller('LogoutCtrl', function($scope, Logout, $state){
	$scope.logoutBtn = function(){
		var logger = Logout.logoutUser()
		logger.then(function(){
			console.log('logged out')
			$state.go('login')
		})
	}
})