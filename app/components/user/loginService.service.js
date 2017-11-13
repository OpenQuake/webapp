// User service

angular.module("user")

.factory("LoginService", function ($state, $urlRouter) {

	//indicates if the user is logged
	var isUserLogged = false;
	//indicate the state to redirect the user afetr the login
	var redirectState = {
		name: "index", //name of the state
		params: undefined //parameters of the state
	}


	//function to log in a user
	function login(username, password) {
		if (username == "ale") {
			isUserLogged = true;
			return true;
		} else {
			return false;
		}
	}
		
	//function to logout a user
	function logout() {
		isUserLogged = false;
	}

	//function to check if a user is logged
	function isLogged() {
		return isUserLogged;
	}

	//set the state to redirect the user after the login
	function setRedirectState(name, params) {
		//setting the redirect state
		redirectState.name = name;
		redirectState.params = params;
	}

	//redirect the user to the previus setted state after the login
	function redirect() {
		//redirect to the setted url
		$state.go(redirectState.name, redirectState.params);
	}


	//return the service object
	return {
		login: login, //login function
		logout: logout, //logout function
		isLogged: isLogged, //check if the user is logged
		setRedirectState: setRedirectState, //set the redirect state
		redirect: redirect, //redirect the user to the state setted
	};

});