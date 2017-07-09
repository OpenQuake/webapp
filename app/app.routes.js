// Modulo contenente i routes principali dell'applicazione

angular.module("app.routes", ["ngRoute"])

.config(function ($routeProvider, $locationProvider) {

	// Abilito HTML5 MURLs
	$locationProvider.html5Mode(true);

	//----ROUTES----

	// homepage routes
	$routeProvider.when("/", {
		templateUrl: "app/components/homepage/homepage.tpl.html"
	});	

});