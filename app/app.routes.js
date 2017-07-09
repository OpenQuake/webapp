//Modulo contenente i routes principali dell'applicazione

angular.module("app.routes", ["ngRoute"])

.config(function ($routeProvider, $locationProvider) {

	//verifico se il brower supporta HTML5 MURLs
	if (window.history && history.pushState) {
		$locationProvider.html5Mode(true);
	}

	//routes
	$routeProvider.when("/", {
		templateUrl: "app/components/home/home.tpl.html"
	});

	

});