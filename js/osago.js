$(document).ready(function() {
  
  function parseGetParams() { 
    var $_GET = {}; 
    var __GET = window.location.search.substring(1).split("&")
    if(__GET[0] == "") return false;
    for(var i=0; i<__GET.length; i++) { 
      var getVar = __GET[i].split("="); 
      $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; 
    } 
    return $_GET; 
  } 
  
  var GETArr = parseGetParams();
  
  var osagoDate = GETArr.varExpire;
  
  var osagoDate = "May 30, 2016"; //для проверки
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
    clock = $(".osago-counter").FlipClock(diff, {
      clockFace: "Counter",
      countdown: true
    });
  }
  
  insuranceCounter(osagoDate);
  
    
//Upscroll function
  $("#up-scroll").click(function() {

    $("body,html").animate({scrollTop:0},800);

  });			
});



