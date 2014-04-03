function PaperCtrl($scope, Modal){
	
	//$scope.data = {message: 'Hello Kitties!'};

	$scope.modalObj = {
		visible:	false	
	};


	$scope.modal = function(model) {
		switch(model) {
			case 'open':	$scope.modalObj.visible	= true;
							break;
			case 'close':	$scope.modalObj.visible	= false;
							break;
		}
	}

	$scope.prev = function() {
		Modal.flip('prev');
	}
	
	$scope.next = function() {
		Modal.flip('next');
	}
}



PaperCtrl.$inject = ['$scope', 'Modal'];