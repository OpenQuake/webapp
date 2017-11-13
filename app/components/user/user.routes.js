// Routing user module

angular.module("user")

.config(function ($stateProvider, $urlMatcherFactoryProvider, $locationProvider) {

	// ui-router non strict mode and case insensitive
	$urlMatcherFactoryProvider.caseInsensitive(true);
	$urlMatcherFactoryProvider.strictMode(false); 

	// Enabling HTML5 MURLs
	$locationProvider.html5Mode(true);
	
	// State definition

	//--- Login ---
	$stateProvider.state("login", {
		url: "/login",
		templateUrl: "app/components/user/login/login.tpl.html",
		controller: "loginCtrl"
	});

	//--- Registration ---
	$stateProvider.state("registration", {
		url: "/registration",
		templateUrl: "app/components/user/registration/registration.tpl.html"
	});

	//--- Forgot Password ---
	//base url
	$stateProvider.state("forgot-password", {
		url: "/forgotpassword",
		redirectTo: 'forgot-password-step1'
	});

	$stateProvider.state("forgot-password-step1", {
		templateUrl: "app/components/user/forgot-password/step1/forgot-password-step1.tpl.html"
	});

	//forgot-password
	$stateProvider.state("forgot-password-step2", {
		templateUrl: "app/components/user/forgot-password/step2/forgot-password-step2.tpl.html"
	});

	//forgot-password
	$stateProvider.state("forgot-password-step3", {
		templateUrl: "app/components/user/forgot-password/step3/forgot-password-step3.tpl.html"
	});

	//forgot-password
	$stateProvider.state("forgot-password-step4", {
		templateUrl: "app/components/user/forgot-password/step4/forgot-password-step4.tpl.html"
	});


});