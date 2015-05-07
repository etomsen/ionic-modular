(function(){
	'use strict';
	angular
		.module('app.main')
		.controller('Main', function ($rootScope, $scope) {
			$scope.init = function(){};
			$scope.login = function(){
				$rootScope.$broadcast('event:app.loginShow');
			};
			$scope.init();
		});
}());