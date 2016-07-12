app.controller('SignupCtrl', function($scope, Signup, $state){
	$scope.submit = function(){
		var signupData = {
			email: $scope.signupForm.email,
			password: $scope.signupForm.password
		};

		var signup = Signup.signupUser(signupData);

		signup.then(function(data){
			if(data.status == 204){
				$state.go('stories')
			}
		})
	}



})