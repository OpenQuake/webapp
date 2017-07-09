// Modulo per il souting delle pagine statiche

angular.module("static.routes", ["ngRoute"])

.config(function ($routeProvider, $locationProvider) {

	// Abilito HTML5 MURLs
	$locationProvider.html5Mode(true);

	//----ROUTES----

	// $routeProvider.when("/map", {
	// 	templateUrl: "#"
	// });

	// $routeProvider.when("/project", {
	// 	templateUrl: "#"
	// });

	// $routeProvider.when("/contribute", {
	// 	templateUrl: "#"
	// });

	// $routeProvider.when("/open-source", {
	// 	templateUrl: "#"
	// });

	// $routeProvider.when("/faq", {
	// 	templateUrl: "#"
	// });

	// $routeProvider.when("/team", {
	// 	templateUrl: "#"
	// });

	//privacy policy
	$routeProvider.when("/privacy", {
		templateUrl: "app/components/static/privacy/privacy.tpl.html"
	});

	// $routeProvider.when("/tos", {
	// 	templateUrl: "#"
	// });
	

});