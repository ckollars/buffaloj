/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    // $("h1").fitText(
    //     1.2, {
    //         minFontSize: '35px',
    //         maxFontSize: '65px'
    //     }
    // );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    // new WOW().init();

    var jayFeed = new Instafeed({
      get: 'user',
        userId: 266550284,
        accessToken: '266550284.456bf7f.9e8b3d0a92aa4283baa4437cba216746',
        limit: '36',
        // links: 'false',
        resolution: 'standard_resolution',
        target: 'gallery',
        template: '<div class="tattoo col-lg-3 col-sm-4"><img src="{{image}}"></div>',

      filter: function(image) {
        return image.tags.indexOf('tenthsanctum') >= 0;
      }
    });

    // jayFeed.run();

})(jQuery); // End of use strict
