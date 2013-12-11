var http = require('http');
var request = require('request');
var cheerio = require('cheerio');
var url = require('url');
var colors = require('colors');

var parseHTML = function (html, callback, opt) {
    var $ = cheerio.load(html),
        result = require('./getTagsData.js')($, opt);

    if (result.error) {
        opt.onError(result);
    } else {
        callback(result);
    }
}

var requestURL = function (opt) {

    var options = {
        url: opt.url || 'http://google.com',
        method: (opt.method || '').toLowerCase() || 'get'
    };

    request[options.method](options.url, function (error, response, body) {
        if (error) {
            opt.onError(error);

            return false;
        }

        if (!error && response.statusCode == 200) {
            parseHTML(body, opt.onContent, opt);
        }
    });
}

exports.filtro = function (opt) {
    opt.onStatus = opt.onStatus || function () {};
    opt.onHeaders = opt.onHeaders || function () {};
    opt.onHeaders = opt.onHeaders || function () {};
    opt.onContent = opt.onContent || function () {};
    opt.onError = opt.onError || function () {};

    requestURL(opt);
}