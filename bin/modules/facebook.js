module.exports = {
    returnData: function ($) {
        return {
            locale:      $('meta[property="og:locale"]').attr('content'),
            admins:      $('meta[property="fb:admins"]').attr('content'),
            title:       $('meta[property="og:title"]').attr('content'),
            admins:      $('meta[property="og:admins"]').attr('content'),
            description: $('meta[property="og:description"]').attr('content'),
            url:         $('meta[property="og:url"]').attr('content'),
            site_name:   $('meta[property="og:site_name"]').attr('content'),
            type:        $('meta[property="og:type"]').attr('content'),
            image:       $('meta[property="og:image"]').attr('content')
        }
    }
}