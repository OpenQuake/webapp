// Modulo per il routing della pagina di errore 404

angular.module("error404")

.config(function ($stateProvider, $urlMatcherFactoryProvider, $locationProvider) {

	// ui-router non strict mode and case insensitive
	$urlMatcherFactoryProvider.caseInsensitive(true);
	$urlMatcherFactoryProvider.strictMode(false); 

	// Enabling HTML5 MURLs
	$locationProvider.html5Mode(true);
	
	// State definition

	$stateProvider.state("error404", {
		templateUrl: "app/components/error404/error404.tpl.html"
	});

});