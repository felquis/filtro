var sc = require('./bin/filtro').filtro;

var url = sc({
	url: 'http://www.tutsmais.com/blog/',
	modules: ['facebook', 'title'],
	onError: function (e) {
		console.log('Error: ', e);
	},
	onContent: function (e) {
		console.log('Success: ', e);
	}
});