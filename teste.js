var sc = require('./bin/filtro').filtro;

var url = sc({
	url: 'http://www.felquis.com/',
	modules: ['html'],
	onError: function (e) {
		console.log('Error: ', e);
	},
	onContent: function (e) {
		console.log('Success: ', e);
	}
});