var http = require('http');
var cheerio = require('cheerio');
var url = require('url');
var colors = require('colors');

var parseHTML = function (html, callback) {
    var $ = cheerio.load(html);
    var result = {};

    result.title = $('title').text();

    result.facebook = {
        locale: $('meta[property="og:locale"]').attr('content'),
        admins: $('meta[property="fb:admins"]').attr('content'),
        title: $('meta[property="og:title"]').attr('content'),
        admins: $('meta[property="og:admins"]').attr('content'),
        description: $('meta[property="og:description"]').attr('content'),
        url: $('meta[property="og:url"]').attr('content'),
        site_name: $('meta[property="og:site_name"]').attr('content'),
        type: $('meta[property="og:type"]').attr('content'),
        image: $('meta[property="og:image"]').attr('content')
    }

    callback(result);
}

var requestURL = function (opt) {

    opt.url = url.parse(opt.url);

    var options = {
        host: opt.url.host || 'www.google.com.br',
        port: opt.url.port || 80,
        path: opt.url.path || '/',
        method: opt.method || 'GET'
    };

    var req = http.request(options, function(res) {

        if (res.statusCode > 300 && res.statusCode < 400 && res.headers.location) {
            if (url.parse(res.headers.location).hostname) {
                console.log(opt.url.href.yellow, res.statusCode, ' --> '.cyan , res.headers.location.green);

                opt.url = res.headers.location;
                requestURL(opt);
            } else {
                console.log('Hostname not included; get host from requested URL (url.parse()) and prepend to location.'.red);
            }
        } else {
            opt.onStatus(res.statusCode);
            opt.onHeaders(JSON.stringify(res.headers));

            res.setEncoding('utf8');

            var html = '';

            res.on('data', function(chunk) {
                html += chunk;
            }).on('end', function () {
                console.log('HTML Success'.green);
                console.log('- - - - - - - - - - - - - - - - - - - - - - - '.green);
                parseHTML(html, opt.onContent);
            });
        }
    });

    req.on('error', function(e) {
        opt.onError(e.message);
    });

    req.write('data\n');
    req.write('data\n');
}

exports.summarycontent = function (opt) {
    opt.onStatus = opt.onStatus || function () {};
    opt.onHeaders = opt.onHeaders || function () {};
    opt.onHeaders = opt.onHeaders || function () {};
    opt.onContent = opt.onContent || function () {};
    opt.onError = opt.onError || function () {};

    requestURL(opt);
}