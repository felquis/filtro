# node-page-data

Get summary of a url based in semantic and social tags.

## Try yourself

1. `git clone git@github.com:felquis/node-page-data.git`
1. `npm install`
1. `node teste.js`

## You will see:
![summary-content](https://f.cloud.github.com/assets/736728/442248/f939209e-b141-11e2-8cdf-1a89eb8bc465.png)

## Open `teste.js`
// teste.js
```js
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
```

## ;D