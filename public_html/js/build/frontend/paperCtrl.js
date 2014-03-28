function PaperCtrl($scope){
	$scope.data = {message: "Hello Kitties"};
	console.log('test');
}

papermvc.directive("modalContainer", function () {
	return {
		restrict: "E",
		template: "<div class='wrapper'><div id='prev' prev></div><div class='page'><div class='box'></div></div><div id='next' next></div></div>"
	}
})

papermvc.directive("prev", function () {
	return function ( scope, element ) {
		element.bind('mousedown', function(){
			console.log('flip back!');
		})
	}
})

papermvc.directive("next", function () {
	return function ( scope, element ) {
		element.bind('mousedown', function(){
			console.log('flip forward!');
		})
	}
})

PaperCtrl.$inject = ['$scope'];