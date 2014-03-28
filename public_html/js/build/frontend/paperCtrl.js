function PaperCtrl($scope){
	
	$scope.data = {message: "Hello Kitties!"};
	
	$scope.prev = function () {
		console.log('flip back!');
	}
	
	$scope.next = function () {
		console.log('flip forward!');
	}
}

papermvc.directive("modalContainer", function () {
	return {
		restrict: "E",
		template: "<div class='wrapper'><div id='prev' flip-button='prev()'></div><div class='page'><div id='box'></div></div><div id='next' flip-button='next()'></div></div>"
	}
})

papermvc.directive("flipButton", function () {
	return function ( scope, element, attrs ) {
		element.bind('mousedown', function () {
			scope.$apply(attrs.flipButton);
			
			console.log(document.getElementById('box'));
		})
	}
})

PaperCtrl.$inject = ['$scope'];