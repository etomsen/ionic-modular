(function(){
	'use strict';
	angular
		.module('app.login')
		.controller('Login', Login);

	Login.$inject = ['$scope', 'login', '$window', '$state'];

	function Login($scope, login, $window, $state) {
		if ($window.cordova && $window.cordova.plugins && $window.cordova.plugins.Keyboard) {
			$window.cordova.plugins.Keyboard.show();
		}
		$scope.data = {};
		$scope.loginDemo = function() {
			alert('TODO: loginDemo');
		};

		$scope.login = function() {
			delete $scope.data.loginError;
			login.loginPromise({login: $scope.data.login, password: $scope.data.password})
				.then();
		};
		$scope.onLoginSuccess = function(data) {
			data = data || {};
			// there is no another promise listening for loginSuccess, navigate to main
			if (!data.loginWaitDeferred) {
				$state.go('app.main');
			}
		};
		$scope.onLoginFail = function(error) {
			$scope.data.loginError = error;
		};
	}
}());