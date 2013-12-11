var sc = require('./bin/filtro').filtro;

var url = sc({
    url: 'http://tutsmais.com.br',
    modules: ['facebook', 'title'],
    onError: function (e) {
        console.log('Error: ', e);
    },
    onContent: function (e) {
        console.log('Success: ', e);
    }
});