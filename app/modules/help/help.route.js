(function() {
    'use strict';
    angular
        .module('app.help')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.help',
                config: {
                    url: '/help',
                    title: 'help',
                    views: {
                        'mainContent': {
                            templateUrl: 'scripts/help/help.html',
                            controller: 'Help',
                            controllerAs: 'vm'
                        }
                    },
                    data: {
                        requireLogin: true
                    }
                }
            }
        ];
    }
})();