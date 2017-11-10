// homepage module

angular.module("homepage")

.config(function ($stateProvider) {
	
	$stateProvider.state("homepage", {
		templateUrl: "app/components/homepage/homepage.tpl.html"
	});

})