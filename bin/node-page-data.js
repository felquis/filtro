var http = require('http');
var cheerio = require('cheerio');
var url = require('url');
var colors = require('colors');

var parseHTML = function (html, callback, opt) {
    var $ = cheerio.load(html);

    var result = require('./getTagsData.js')($, opt);

    if (result.error) {
        opt.onError(result);
    } else {
        callback(result);
    }
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
                parseHTML(html, opt.onContent, opt);
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