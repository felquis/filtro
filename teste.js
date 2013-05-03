var sc = require('./bin/filtro');

var url = sc.summarycontent({
	url: 'http://www.tutsmais.com.br/blog',
	modules: ['facebook', 'title'],
	onError: function (e) {
		console.log('Error: ', e);
	},
	onContent: function (e) {
		console.log('Success: ', e);
	}
});