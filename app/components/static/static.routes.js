// Module to route static content pages

angular.module("static")

.config(function ($stateProvider, $urlMatcherFactoryProvider, $locationProvider) {

	// ui-router non strict mode and case insensitive
	$urlMatcherFactoryProvider.caseInsensitive(true);
	$urlMatcherFactoryProvider.strictMode(false);

	// Enabling HTML5 MURLs
	$locationProvider.html5Mode(true);
	
	// State definitions
	$stateProvider.state("project", {
		url: "/project",
		templateUrl: "app/components/static/project/project.tpl.html"
	});

	$stateProvider.state("contribute", {
		url: "/contribute",
		templateUrl: "app/components/static/contribute/contribute.tpl.html"
	});

	$stateProvider.state("open-source", {
		url: "/open-source",
		templateUrl: "app/components/static/open-source/open-source.tpl.html"
	});

	$stateProvider.state("faq", {
		url: "/faq",
		templateUrl: "app/components/static/faq/faq.tpl.html"
	});

	$stateProvider.state("team", {
		url: "/team",
		templateUrl: "app/components/static/team/team.tpl.html"
	});

	$stateProvider.state("privacy", {
		url: "/privacy",
		templateUrl: "app/components/static/privacy/privacy.tpl.html"
	});

	$stateProvider.state("tos", {
		url: "/tos",
		templateUrl: "app/components/static/tos/tos.tpl.html"
	});

});