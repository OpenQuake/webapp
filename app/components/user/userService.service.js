// User service (it handles registration, login, forgot-password process)

angular.module("user")

//user service
.factory("UserService", function (LoginService) {

	return {
		getUsername: getUsername,
		getEmail: getEmail
	};

	//function to return the username
	function getUsername() {
		if (LoginService.isLogged()) {
			return "alessandro1105";
		}
	}

	//function to return the email
	function getEmail() {
		if (LoginService.isLogged()) {
			return "alessandro.pasqualini.1105@gmail.com";
		}
	}

	// //function to change the user password
	// function changePassword() {

	// }

	// //function to resend email validation email
	// function resendValidationEmail() {

	// }

	// //function to validate email
	// function validateEmail() {

	// }
});