// Modulo per il routing della pagina di errore 404

angular.module("error404.routes", ["ngRoute"])

.config(function ($routeProvider, $locationProvider) {

	// Abilito HTML5 MURLs
	$locationProvider.html5Mode(true);

	//----ROUTES----

	// 404
	$routeProvider.otherwise({
		templateUrl: "app/components/error404/error404.tpl.html"
	})

	

});