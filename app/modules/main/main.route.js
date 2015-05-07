(function() {
    'use strict';
    angular
        .module('app.main')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app',
                config: {
                    url: '/main',
                    abstract: true,
                    templateUrl: 'modules/main/main.html',
                    controller: 'Main',
                    controllerAs: 'vm',
                    title: 'main'
                }
            }
        ];
    }
})();