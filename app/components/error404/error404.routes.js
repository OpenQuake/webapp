// Modulo per il routing della pagina di errore 404

angular.module("error404")

.config(function ($stateProvider) {

	$stateProvider.state("error404", {
		templateUrl: "app/components/error404/error404.tpl.html"
	});

});