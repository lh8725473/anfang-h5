appModule.directive('scrollHack', ['$timeout',
	function($timeout) {
		return {
			restrict: 'C',
			link: function(scope, element, attrs) {
				$timeout(function(){
					overscroll(element[0]);
				})
			}
		}
	}
]);