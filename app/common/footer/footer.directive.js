// Footer directive

angular.module("footer")

.directive("oqFooter", function() {
	
	return {
		restrict: "E",
		replace: true,
		templateUrl: "app/common/footer/footer.tpl.html"
	}

});