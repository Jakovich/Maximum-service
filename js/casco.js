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
  
  var cascoDate = GETArr.expire;
  
  var cascoDateValue = parseInt(cascoDate, 10);
  var cascoText = document.querySelector(".insurance-period__counter");
  cascoDateValue = 21; //для проверки
 //Flipclock function
  if (!isNaN(cascoDateValue) & cascoDateValue > 0){
  var clock;
  
      // Instantiate a coutdown FlipClock
  clock = $(".casco-counter").FlipClock(cascoDateValue, {
    clockFace: "Counter"
    
  });
  } else {
    cascoText.innerHTML = "Ваш страховой полис КАСКО закончился";
    $(cascoText).css("text-align", "center");
  }
 
    
//Upscroll function
  $("#up-scroll").click(function() {

    $("body,html").animate({scrollTop:0},800);

  });			
});



