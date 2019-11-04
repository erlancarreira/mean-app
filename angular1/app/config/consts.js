angular.module('primeiraApp').constant('consts', {
	appName: 'App - Contas a pagar e receber',
	version: '1.0',
	owner  : 'Erlan Carreira',
	year   : '2019',
	site   : 'http://erlancarreira.com.br',
	apiUrl : 'http://localhost:3003/api',
	oapiUrl: 'http://localhost:3003/oapi',
	userKey: '_app_user'
}).run(['$rootScope', 'consts', function ($rootScope, consts) {
	$rootScope.consts = consts
}])