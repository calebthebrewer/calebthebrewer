angular.module('app')
.directive('siteThumbnail', [
		function() {
			return {
				scope: {
					title: '@',
					image: '@',
					href: '@'
				},
				restrict: 'EA',
				transclude: true,
				templateUrl: 'site-thumbnail/tile.tpl.html'
			}
		}]);