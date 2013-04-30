var sc = require('./bin/node-page-data');

var url = sc.summarycontent({
	url: 'http://www.tutsmais.com.br/blog',
	onError: function (e) {
		console.log('Error: ', e);
	},
	onContent: function (e) {
		console.log('Success: ', e);
	}
});