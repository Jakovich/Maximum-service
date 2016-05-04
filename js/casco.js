
$(document).ready(function() {
  var isStop = true;
  var restday = 20;
  
  var clock;
    // Instantiate a counter
  clock = new FlipClock($('.casco-counter'), restday, {
    clockFace: 'Counter',
    autoStart: true,
    countdown: true,

  });
  
  if(isStop) {
    clock.stop(function() {
  });
  }
    
  $("#up-scroll").click(function() {

    $("body,html").animate({scrollTop:0},800);

  });			
});


