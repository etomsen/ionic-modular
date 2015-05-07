(function(){
	'use strict';
	angular
		.module('restapi')
		.provider('restapi', providerFn);

	function providerFn() {
		var serverUrl = 'http://localhost:8080/restapi';
		var userFactory;
		return {
			setServerUrl: setServerUrl,
			$get: ['restapiUser', function(restapiUser){
				userFactory = restapiUser;
				return {
					gethAuth: getAuth,
					postAuth: postAuth
				};
			}]
		};

		function getAuth(url, data) {
			console.log('restapi.getAuth: url={0}/{1}, data={2}'.f(serverUrl, url, JSON.stringify(data)));
		}
		function postAuth(url, data) {
			console.log('restapi.postAuth: url={0}/{1}, data={2}'.f(serverUrl, url, JSON.stringify(data)));
		}

		function setServerUrl(value) {
			serverUrl = value;
		}

		function getIsoDate() {
			var d = new Date();
	        function pad(n) {
	            return n < 10 ? '0' + n : n;
	        }
	        return '{0}-{1}-{2}T{3}:{4}:{5}Z'.f(d.getUTCFullYear(), pad(d.getUTCMonth() + 1), pad(d.getUTCDate()), pad(d.getUTCHours()), pad(d.getUTCMinutes()), pad(d.getUTCSeconds()));
	    }

	    function makeRandomString() {
	        return Math.random()
	            .toString(36)
	            .substring(2, 15) + Math.random()
	            .toString(36)
	            .substring(2, 15);
	    }

		function getAuthHeader(url, method) {
	        var userId = userFactory.getUserId();
	        var sessionToken = userFactory.getSessionToken();
	        if (!userId || !sessionToken) {
	            return null;
	        }
	        var time = getIsoDate();
	        var nonce = makeRandomString();
	        var stringToHash = '{0}:{1},{2},{3},{4}'.f(sessionToken, url, method, time, nonce);
	        var authorization = '{0}:{1}'.f(userId, cryptojs.restapiHash(stringToHash));
	        return {
	            'Authorization': authorization,
	            'x-me-tomsen-restapi-date': time,
	            'nonce': nonce
	        };
	    }
	}
})();