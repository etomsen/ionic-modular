(function() {
    'use strict';
    angular
    	.module('etomsen.exception', ['etomsen.logger'])
    	.config(configFn);

    configFn.$inject = ['$provide'];
    function configFn($provide) {
    	$provide.decorate('$exceptionHandler', exceptionHandler);
    }
    exceptionHandler.$inject = ['$delegate', 'logger'] ;
    function exceptionHandler($delegate, logger) {
    	return function(exception, cause) {
    		$delegate(exception, cause);
    		var errorData = {
	            exception: exception,
	            cause: cause
	        };
    		logger.error(exception.msg, errorData);
    	};
    }
})();