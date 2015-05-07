(function(){
	'use strict';
	angular
		.module('app', ['ionic', 'restapi', 'app.intro', 'app.main', 'app.help', 'app.login'])
		.run(run)
		.config(configure);

	run.$inject = ['$rootScope', '$state', '$ionicPlatform', 'restapiUser', 'login'];
	function run($rootScope, $state, $ionicPlatform, restapiUser, login) {
		// restapiUser.setUser('1', 'admin', 'some-random-token');
		// console.log(restapiUser.getUserId());
		restapiUser.clearUser();
		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
			if (window.cordova && window.cordova.plugins.Keyboard) {
			window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			window.StatusBar.styleDefault();
			}
		});
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
			var requireLogin = toState.data && toState.data.requireLogin;
    		if (requireLogin && !restapiUser.isLoggedIn()) {
      			event.preventDefault();
      			login.waitLogin()
      				.then(function () {
						return $state.go(toState.name, toParams);
					})
					.catch(function () {
						return $state.go('intro');
					});
				$state.go('login');
    		}
  		});
	}

	configure.$inject = ['$urlRouterProvider', 'restapiProvider', 'restapiUserProvider'];
	function configure($urlRouterProvider, restapiProvider, restapiUserProvider ) {
        // configure restapi providers
		restapiUserProvider.setStoreKey('testApp');
		restapiProvider.setServerUrl('localhost');
		$urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get('$state');
        $state.go('app.help');
    });
	}
}());
