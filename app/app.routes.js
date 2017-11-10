// Modulo contenente i routes principali dell'applicazione

angular.module("app.routes", ["ui.router"])

.config(function ($stateProvider, $locationProvider) {

	// Abilito HTML5 MURLs
	$locationProvider.html5Mode(true);

	//----ROUTES----

	// homepage routes
	$stateProvider.state("homepage", {
		url: "/",
		templateUrl: "app/components/homepage/homepage.tpl.html"
	});

});