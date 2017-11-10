// Modulo per il routing della pagina di errore 404

angular.module("error404.routes", ["ui.router"])

.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

	// Abilito HTML5 MURLs
	$locationProvider.html5Mode(true);

	// If there are no match in previus routes
	$urlRouterProvider.otherwise('/404');

	//404 state
	$stateProvider.state("error404", {
		url: "/404",
		templateUrl: "app/components/error404/error404.tpl.html"
	});

});