// Login controller

angular.module("user")

.controller("loginCtrl", function ($scope, LoginService) {
	//data container of the scope
	$scope.data = {};

	//login function
	$scope.login = function (username, password) {
		if (LoginService.login(username, password)) { //if the login is successful redirect the user
			LoginService.redirect();
		}
	}

});