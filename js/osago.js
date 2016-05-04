$(document).ready(function() {
  var clock;
    // Instantiate a counter
  clock = new FlipClock($('.osago-counter'), 20, {
    clockFace: 'Counter',
    autoStart: true,
    countdown: true
  });
    
    
  $("#up-scroll").click(function() {

    $("body,html").animate({scrollTop:0},800);

  });			
});