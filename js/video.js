'use strict';

(function ($) {
  $(".player").mb_YTPlayer();
  
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