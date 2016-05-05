'use strict';

(function ($) {
    $('.masthead-video').coverVid(1280, 720);
    fullscreen();
    $(window).resize(fullscreen);
    //$(window).scroll(headerParallax);

    function fullscreen() {
        var masthead = $('.to-test');
        var windowH = $(window).height();
        var windowW = $(window).width();

        masthead.width(windowW);
        masthead.height(windowH);
    }
}(jQuery));