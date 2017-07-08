angular.module("oqCommon")

//direttiva per applicare il footer
.directive("oqFooter", function () {
	return {
		restrict: "E",
		replace: true,
		templateUrl: "app/common/footer/footer.html"
	}
});