/*
    Returns the JSON with Filtro page data.
*/

var isAValidTag = require('./../lib/validTags.js');

module.exports = function (html, opt) {
    var result = {};

    /*
        Verify if we have `tags` property and if it is an `Array` ou `String`
    */
    if (!!opt.modules) {
        if (typeof(opt.modules) === 'object' && typeof(opt.modules.slice) === 'function') {
            // Is Array
            opt.modules.forEach(function (value) {
                if (isAValidTag(value)) {
                    result[value] = require('filtro-'+value).returnData(html);
                } else {
                    result[value] = {
                        error: true,
                        errorText: 'The tag name '+value+' are not available.'
                    }
                }
            });
        } else {
            // Is string
            if (typeof(opt.modules) === 'string') {
                if (isAValidTag(opt.modules)) {
                    result[opt.modules] = require('filtro'+opt.modules).returnData(html);
                } else {
                    result[opt.modules] = {
                        error: true,
                        errorText: 'The tag name '+opt.modules+' are not available.'
                    }
                }
            }
        }
    } else {
        result.error = true;
        result.errorText = 'You forgot the property `modules`';
    }

    return result;
}