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
		templateUrl: "app/components/account/page-container/page-container.tpl.html",
		redirectTo: "account.account.info",
		data: {
			requireLogin: true //the user is required to login before access
		}
	});

	//--- SUBSTATE /account/* definitions ---
	//abstract state
	$stateProvider.state("account.account", {
		url: "/account",
		template: "<ui-view></ui-view>",
		redirectTo: "account.account.info"
	});

	//account inf
	$stateProvider.state("account.account.info", {
		url: "/info",
		templateUrl: "app/components/account/account/info/account-info.tpl.html"
	});

	//account.delete
	$stateProvider.state("account.account.delete", {
		url: "/delete",
		templateUrl: "app/components/account/account/delete/account-delete.tpl.html"
	});

	//--- SUBSTATE /stations/* ---
	$stateProvider.state("account.stations", {
		url: "/stations",
		template: "<ui-view></ui-view>",
		redirectTo: "account.stations.list"
	});

	$stateProvider.state("account.stations.list", {
		url: "",
		templateUrl: "app/components/account/stations/list/stations-list.tpl.html",
	});

	$stateProvider.state("account.stations.edit", {
		url: "/edit",
		templateUrl: "app/components/account/stations/edit/stations-edit.tpl.html",
	});

	$stateProvider.state("account.stations.new", {
		url: "/new",
		templateUrl: "app/components/account/stations/new/stations-new.tpl.html",
	});

	$stateProvider.state("account.station.settings", {
		url: "/settings",
		templateUrl: "app/components/account/stations/settings/stations-settings.tpl.html",
	});

	//--- SUBSTATE /readings/* definitions ---
	$stateProvider.state("account.readings", {
		url: "/readings",
		templateUrl: "app/components/account/readings/readings.tpl.html"
	});

});