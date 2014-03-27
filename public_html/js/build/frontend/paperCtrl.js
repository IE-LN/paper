/*papermvc.controller('PaperCtrl', function PaperCtrl($scope) {
	$scope.data = {message: "Hello Kitties"};
});*/

function PaperCtrl($scope){
	$scope.data = {message: "Hello Kitties"};
	console.log('test');
}

papermvc.directive("modalContainer", function () {
	return {
		restrict: "E",
		template: "<div class='page'>Bam! Modal Power!</div>"
	}
})

PaperCtrl.$inject = ['$scope'];