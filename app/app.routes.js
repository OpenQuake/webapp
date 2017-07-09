// Modulo contenente i routes principali dell'applicazione

angular.module("app.routes", ["ngRoute"])

.config(function ($routeProvider, $locationProvider) {

	// Abilito HTML5 MURLs
	$locationProvider.html5Mode(true);

	//----ROUTES----

	// home
	$routeProvider.when("/", {
		templateUrl: "app/components/home/home.tpl.html"
	});

	// 404
	$routeProvider.otherwise({
		templateUrl: "app/components/error404/error404.tpl.html"
	})

	

});