$(document).ready(function() {
  var linksDate = "June 30, 2016";
 //Flipclock function
  
  function insuranceCounter(date) {
    var clock;

      // Set dates.
    var futureDate  = new Date(date);
    var currentDate = new Date();

      // Calculate day difference
    function dayDiff(first, second) {
      return (second-first)/(1000*60*60*24);
    }
    
    var diff = dayDiff(currentDate, futureDate);

    if(diff < 0) {
      diff = 0;
    }

      // Instantiate a coutdown FlipClock
    clock = $(".casco-counter").FlipClock(diff, {
      clockFace: "Counter",
      countdown: true
    });
  }
  
  insuranceCounter(linksDate);
  
    
//Upscroll function
  $("#up-scroll").click(function() {

    $("body,html").animate({scrollTop:0},800);

  });			
});



