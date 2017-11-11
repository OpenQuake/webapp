// Header directive

angular.module("header")

.directive("oqHeader", function() {
	
	return {
		restrict: "E",
		replace: true,
		templateUrl: "app/common/header/header.tpl.html"
	}

});