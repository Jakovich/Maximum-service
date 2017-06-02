"use strict";

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
  
  var osagoDate = GETArr.expire;
  
  var osagoDateValue = parseInt(osagoDate, 10);
  
 
 //Flipclock function
  var cascoText = document.querySelector(".insurance-period__counter");
  
  if (!isNaN(osagoDateValue) & osagoDateValue > 0){
  var clock;
  
      // Instantiate a coutdown FlipClock

      // Instantiate a coutdown FlipClock
    clock = $(".osago-counter").FlipClock(osagoDateValue, {
      clockFace: "Counter"
    });
    
  } else {
    cascoText.innerHTML = "Ваш страховой полис ОСАГО закончился";
    $(cascoText).css("text-align", "center");
  }
  
  
    
//Upscroll function
  $("#up-scroll").click(function() {

    $("body,html").animate({scrollTop:0},800);

  });			
});



