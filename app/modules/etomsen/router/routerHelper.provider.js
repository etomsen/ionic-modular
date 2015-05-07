(function() {
    'use strict';

    angular
        .module('etomsen.router')
        .provider('routerHelper', routerHelperProvider);

    routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
        /* jshint validthis:true */
        this.$get = RouterHelper;
        RouterHelper.$inject = ['$state'];
        function RouterHelper($state) {
            var hasOtherwise = false;
            var service = {
                configureStates: configureStates,
                getStates: getStates
            };

            return service;

            function configureStates(states, otherwisePath) {
                states.forEach(function(state) {
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }

            function getStates() {
               return $state.get();
            }
        }
    }
})();