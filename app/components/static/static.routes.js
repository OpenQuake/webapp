// Module to route static content pages

angular.module("static.routes", ["ngRoute"])

.config(function ($routeProvider, $locationProvider) {

	// Enabling HTML5 MURLs
	$locationProvider.html5Mode(true);

	//----ROUTES----
	$routeProvider.when("/project", {
		templateUrl: "app/components/static/project/project.tpl.html"
	});

	$routeProvider.when("/contribute", {
		templateUrl: "app/components/static/contribute/contribute.tpl.html"
	});

	$routeProvider.when("/open-source", {
		templateUrl: "app/components/static/open-source/open-source.tpl.html"
	});

	$routeProvider.when("/faq", {
		templateUrl: "app/components/static/faq/faq.tpl.html"
	});

	$routeProvider.when("/team", {
		templateUrl: "app/components/static/team/team.tpl.html"
	});

	$routeProvider.when("/privacy", {
		templateUrl: "app/components/static/privacy/privacy.tpl.html"
	});

	$routeProvider.when("/tos", {
		templateUrl: "app/components/static/tos/tos.tpl.html"
	});
	

});