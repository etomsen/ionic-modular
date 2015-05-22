(function(){
	'use strict';
	angular
		.module('app.login')
		.factory('login', factoryFn);

	factoryFn.inject = ['$q', 'restapi'];
	function factoryFn($q, restapi) {
		var loginWaitDeferred;
		var service = {
			waitLoginPromise: waitLoginPromise,
			resolveWaitLogin: resolveWaitLogin,
			rejectWaitLogin: rejectWaitLogin,
			loginPromise: loginPromise
		};
		return service;

		/**
		 * promise that blocks until a successfull login is performed or one of the methods
		 * resolveWaitLogin, rejectWaitLogin is called.
		 * !!Failed login does not resolve the blocking waitLoginPromise
		 * @return {[type]} [description]
		 */
		function waitLoginPromise() {
			if (!loginWaitDeferred) {
				loginWaitDeferred = $q.defer();
			}
			return loginWaitDeferred.promise;
		}

		function resolveWaitLogin(data) {
			if (loginWaitDeferred) {
				loginWaitDeferred.resolve(data);
				loginWaitDeferred = null;
			}
		}

		function rejectWaitLogin(error) {
			if (loginWaitDeferred) {
				loginWaitDeferred.reject(error);
				loginWaitDeferred = null;
			}
		}

		/**
		 * is resolved iff the login is resolved.
		 * returns in data a loginWaitDeferred=true/false,
		 * which is true if there was already a promise listening for a login success.
		 * @param  data={userame, password}
		 * @return {loginWaitDeferred=true/false}
		 */
		function loginPromise(data) {
			data = data || {};
			var deferred = $q.defer();
			if (!data.username || !data.password) {
                deferred.reject({code: 'bug', msg: 'Login promise should have username and password fields'});
                return deferred.promise;
            }
            restapi.post('/login', {'username': data.username, 'password': data.password}).
				success(function(loginData){
					loginData = loginData || {};
					if (!loginData.userId || !loginData.userRole || !loginData.sessionToken) {
						deferred.reject({code: 'app.login.loginFactory.loginPromise.responseDataError'});
						return;
					}
					if (loginWaitDeferred) {
						data.loginWaitDeferred  = true;
						deferred.resolve(data);
						loginWaitDeferred.resolve(data);
						loginWaitDeferred = null;
					} else {
						data.waitingPromiseFlag  = false;
						deferred.resolve(data);
					}
				}).
				error(function(error) {
					deferred.reject(error);
				});
			return deferred.promise;
		}
	}

}());