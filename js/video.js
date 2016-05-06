'use strict';

(function ($) {
    $('.masthead-video').coverVid(1280, 720);
    fullscreen();
    $(window).resize(fullscreen);

    function fullscreen() {
        var masthead = $('.to-intro');
        var windowH = $(window).height();
        var windowW = $(window).width();

        masthead.width(windowW);
        masthead.height(windowH);
    }
}(jQuery));