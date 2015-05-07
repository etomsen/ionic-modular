describe('app.restapi.cryptojs', function() {
	var cryptojs;
	beforeEach(module('app.restapi'));
	beforeEach(inject(function($injector){
		cryptojs = $injector.get('cryptojs');

	}));
	describe('Testing hash function', function() {
		it('Hash on base64 should be properly computed', function() {
			expect(cryptojs.hash('wu6tgwzp2w1dogtcn959yev3ok')).toEqual('Y7L0JvNVcZ3f1YTxaMcxMh60DJa/lzqTaRXeQ62DPPo=');
		});
	});
});