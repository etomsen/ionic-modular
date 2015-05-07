(function(){
	'use strict';
	angular
		.module('app.login')
		.factory('login', factoryFn);

	factoryFn.inject = ['$q'];
	function factoryFn($q) {
		var promise;
		var service = {
			waitLogin: waitLogin,
			resolveLogin: resolveLogin,
			cancelLogin: cancelLogin
		};
		return service;

		function waitLogin() {
			var defered = $q.defer();
			promise = defered;
			return defered.promise;
		}

		function resolveLogin() {
			if (promise) {
				promise.resolve();
				promise = null;
			}
		}

		function cancelLogin() {
			if (promise) {
				promise.reject();
				promise = null;
			}
		}
	}
}());