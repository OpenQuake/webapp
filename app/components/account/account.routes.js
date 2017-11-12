// Routes for the account module
angular.module("account")

.config(function ($stateProvider, $urlMatcherFactoryProvider, $locationProvider) {

	// ui-router non strict mode and case insensitive
	$urlMatcherFactoryProvider.caseInsensitive(true);
	$urlMatcherFactoryProvider.strictMode(false); 

	// Enabling HTML5 MURLs
	$locationProvider.html5Mode(true);

	//--- MAIN STATE ---
	//page container view (abstract state)
	$stateProvider.state("account", {
		abstract: true,
		templateUrl: "app/components/account/page-container/page-container.tpl.html",
		redirectTo: 'account.info'
	});

	//--- SUBSTATE /account/* definitions ---
	$stateProvider.state("account.account-info", {
		url: "/account/info",
		templateUrl: "app/components/account/account/info/account-info.tpl.html"
	});

	//account.delete
	$stateProvider.state("account.account-delete", {
		url: "/account/delete",
		templateUrl: "app/components/account/account/delete/account-delete.tpl.html"
	});

	//--- SUBSTATE /stations/* ---
	$stateProvider.state("account.my-stations", {
		url: "/stations",
		templateUrl: "app/components/account/my-stations/my-stations.tpl.html",
	});

	//--- SUBSTATE /station/* ---
	$stateProvider.state("account.station-edit", {
		url: "/station/edit",
		templateUrl: "app/components/account/station/edit/station-edit.tpl.html",
	});

	$stateProvider.state("account.station-new", {
		url: "/station/new",
		templateUrl: "app/components/account/station/new/station-new.tpl.html",
	});

	$stateProvider.state("account.station-settings", {
		url: "/station/settings",
		templateUrl: "app/components/account/station/settings/station-settings.tpl.html",
	});

	//--- SUBSTATE /readings/* definitions ---
	$stateProvider.state("account.readings", {
		url: "/readings",
		templateUrl: "app/components/account/readings/readings.tpl.html"
	});

});