angular.module("oqCommon")

//direttiva per applicare l'header
.directive("oqHeader", function () {
	return {
		restrict: "E",
		replace: true,
		templateUrl: "app/common/header/header.html"
	}
});