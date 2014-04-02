function PaperCtrl($scope){
	
	$scope.data = {message: 'Hello Kitties!'};

}

papermvc.directive('modalContainer', function () {
	return {
		restrict: 'E',
		template: '<div class="wrapper"><div id="prev" prev-button></div><div class="page"><div id="box"></div><div id="page1-left"></div><div id="page2-right"></div><div id="page2-left"></div><div id="page1-right"></div></div><div id="next" next-button></div></div>'
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



/*

papermvc.directive('modalNav', ['Modal', function(Modal) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			console.log('here');
		}
	}
}]);



*/



papermvc.directive('prevButton', function () {
	return function ( scope, element, attrs ) {
		element.bind('mousedown', function () {
			
			console.log('flip back!');
			
			var b = document.getElementById('box');
			b.className = 'move-left';
			
			var f = document.getElementById('page1-right');
			f.className = 'flip-backward';
			
			var d = document.getElementById('page2-left');
			d.className = 'flip-backward';


		})
	}
})

papermvc.directive('nextButton', function () {
	return function ( scope, element, attrs ) {
		element.bind('mousedown', function () {
			
			console.log('flip forward!');
			
			var b = document.getElementById('box');
			b.className = 'move-right';
			
			var f = document.getElementById('page1-right');
			f.className = 'flip-forward';
			
			var d = document.getElementById('page2-left');
			d.className = 'flip-forward';
		})
	}
})


PaperCtrl.$inject = ['$scope'];