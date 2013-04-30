# node-page-data
Get summary of a url based in semantic and social tags.

## Install
`npm install node-page-data --save`

## Make a little test
```js
var pageData = require('node-page-data');

pageData.summarycontent({
	url: 'http://tutsmais.com.br/blog/',
	onContent: function (e) {
		console.log('Content: ', e);
	}
});
```
### You will see:
![summary-content](https://f.cloud.github.com/assets/736728/442248/f939209e-b141-11e2-8cdf-1a89eb8bc465.png)

## Contributors
Feel free to create a [Issue](https://github.com/felquis/node-page-data/issues) to send suggestions and bugs.