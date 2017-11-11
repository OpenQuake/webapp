// homepage module

angular.module("homepage")

.config(function ($stateProvider, $urlMatcherFactoryProvider, $locationProvider) {

	// ui-router non strict mode and case insensitive
	$urlMatcherFactoryProvider.caseInsensitive(true);
	$urlMatcherFactoryProvider.strictMode(false); 

	// Enabling HTML5 MURLs
	$locationProvider.html5Mode(true);
	
	// State definition
	$stateProvider.state("homepage", {
		url: "/",
		templateUrl: "app/components/homepage/homepage.tpl.html"
	});

});