# Filtro
Catch web pages data, manipulating HTML in the server.

## Install
`npm install filtro --save`

## Make a little test

1 - Install the module `filtro-facebook` to returns the facebook tags in the page:
`npm install filtro-facebook --save`

2 - Write a file containing:
```js
var pageData = require('filtro').filtro;

pageData({
    url: 'http://tutsmais.com.br/blog',
    modules: ['facebook'],
    onContent: function (e) {
        console.log('Content: ', e);
    }
});
```
### You will see:
![summary-content](https://f.cloud.github.com/assets/736728/442248/f939209e-b141-11e2-8cdf-1a89eb8bc465.png)

# API
- `url`: URL to request.
- `modules`: Array of modules to be used: `['facebook', 'title']`, each module will call a Node module, for example `filtro-facebook`, `filtro-title`, `filtro-otherFiltroModule`

# events
- `onContent`: Trigered when your data is complete.
- `onError`: Tregered when have any error.

# Filtro Modules
* [Facebook](http://github.com/felquis/filtro-facebook): Returns the Facebook tags data.
* [Title](http://github.com/felquis/filtro-title): Returns the page title of an URL.
* [HTML](http://github.com/felquis/filtro-html): Returns the HTML of an URL.
* [merriam webster](https://github.com/felquis/filtro-merriam-audio): Returns the audios of words from Merriam Webster website

## Contributors
Feel free to create a [Issue](https://github.com/felquis/filtro/issues) to send suggestions and bugs.