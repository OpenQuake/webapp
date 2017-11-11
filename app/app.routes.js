angular.module("openquake")

.config(function ($urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {

	// ui-router non strict mode and case insensitive
	$urlMatcherFactoryProvider.caseInsensitive(true);
	$urlMatcherFactoryProvider.strictMode(false); 

	// // Enabling HTML5 MURLs
	$locationProvider.html5Mode(true);

	//----ROUTES----
	//homepage main routes
	$urlRouterProvider.when("/", function ($state) {
		$state.go("homepage");
	});

	//error404 main routes
	$urlRouterProvider.otherwise(function ($injector) {
		//getting $state service from $injector
		$state = $injector.get("$state");
		//transition to the error404 state
		$state.go("error404");
	});

});