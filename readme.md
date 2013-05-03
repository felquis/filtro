# filtro
Get summary of a url based in semantic and social tags.

## Install
`npm install filtro --save`

## Make a little test
```js
var pageData = require('filtro');

pageData.summarycontent({
	url: 'http://tutsmais.com.br/blog/',
	modules: ['title', 'facebook'],
	onContent: function (e) {
		console.log('Content: ', e);
	}
});
```
### You will see:
![summary-content](https://f.cloud.github.com/assets/736728/442248/f939209e-b141-11e2-8cdf-1a89eb8bc465.png)

# API
`url`: URL to request.
`modules`: Array os modules: `['facebook', 'title']`;

**events**
`onContent`: Trigered when your data is complete.
`onError`: Tregered when have any error.

## Contributors
Feel free to create a [Issue](https://github.com/felquis/filtro/issues) to send suggestions and bugs.