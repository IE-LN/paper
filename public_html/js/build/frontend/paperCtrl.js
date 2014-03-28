function PaperCtrl($scope){
	
	$scope.data = {message: 'Hello Kitties!'};

}

papermvc.directive('modalContainer', function () {
	return {
		restrict: 'E',
		template: '<div class="wrapper"><div id="prev" prev-button></div><div class="page"><div id="box"></div><div id="current-page1"></div><div id="current-page2"></div><div id="next-page1"></div><div id="next-page2"></div><div id="prev-page1"></div><div id="prev-page2"></div></div><div id="next" next-button></div></div>'
	}
})

papermvc.directive('flipButton', function () {
	return function ( scope, element, attrs ) {
		element.bind('mousedown', function () {
			scope.$apply(attrs.flipButton);
			
			//console.log(document.getElementById('box'));
		})
	}
})

papermvc.directive('prevButton', function () {
	return function ( scope, element, attrs ) {
		element.bind('mousedown', function () {
			
			console.log('flip back!');
			
			var b = document.getElementById('box');
			b.className = 'move-left';
		})
	}
})

papermvc.directive('nextButton', function () {
	return function ( scope, element, attrs ) {
		element.bind('mousedown', function () {
			
			console.log('flip forward!');
			
			var b = document.getElementById('box');
			b.className = 'move-right';
		})
	}
})


PaperCtrl.$inject = ['$scope'];