// Routes for the account module
angular.module("account")

.config(function ($stateProvider, $urlMatcherFactoryProvider, $locationProvider) {

	// ui-router non strict mode and case insensitive
	$urlMatcherFactoryProvider.caseInsensitive(true);
	$urlMatcherFactoryProvider.strictMode(false); 

	// Enabling HTML5 MURLs
	$locationProvider.html5Mode(true);
	
	// State definitions
	
	//Account base URL
	$stateProvider.state("account", {
		url: "/account",
		templateUrl: "app/components/account/account.tpl.html",
		redirectTo: 'account.info'
	});

	//Account info URL
	$stateProvider.state("account.info", {
		url: "/info",
		templateUrl: "app/components/account/account/info/info.tpl.html"
	});

	$stateProvider.state("account.delete", {
		url: "/delete",
		templateUrl: "app/components/account/account/delete/delete.tpl.html"
	});

	// //My Stations URL
	// $stateProvider.state("account.my-stations", {
	// 	url: "/my-stations",
	// 	templateUrl: "app/components/account/account.tpl.html"
	// });

	// $stateProvider.state("account.delete", {
	// 	url: "/delete",
	// 	templateUrl: "app/components/account/account.tpl.html"
	// });


	//If /account redirect to /account/info
	// $urlRouterProvider.when("/account", function ($state) {
	// 	//$state.go("account.info");
	// 	alert("JEY2");
	// });



});