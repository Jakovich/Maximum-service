$(function () { // wait for document ready
		// init
  if ($(window).width() <= 1354) {
    $("#pinContainer").removeAttr("id");
    $("#slideContainer").removeAttr("id");
    $(".panel").removeClass("panel");
  }
  
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
  
  var toDate = GETArr.expire;
  
  var toDateValue = parseInt(toDate, 10);
  
  var toCounter = document.querySelector(".to-counter");
  
  toDateValue = 210; //для примера
  
  if(!isNaN(toDateValue)) {
    toCounter.innerHTML = toDateValue;
  }
  
  var controller = new ScrollMagic.Controller();


		// define movement of panels
  var wipeAnimation = new TimelineMax()
			// animate to second panel
    /*.to("#slideContainer", 0.4, {z: -100})*/		// move back in 3D space
    .to("#slideContainer", 1,   {x: "-33.33%"})	// move in to first panel
    /*.to("#slideContainer", 0.4, {z: 0})	*/			// move back to origin in 3D space
              // animate to third panel
    /*.to("#slideContainer", 0.4, {z: -100, delay: 1})*/
    .to("#slideContainer", 1,   {x: "-66.66%"})
    /*.to("#slideContainer", 0.4, {z: 0})*/

	

		// create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: "200%"
  })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    /*.addIndicators() // add indicators (requires plugin)*/
    .addTo(controller);
  
    $("#up-scroll").click(function() {

    $("body,html").animate({scrollTop:0},800);

  });
  
  var videoItems = $(".to-video__items");
  var linkMore = $(".to-video__link");
  var PAGE_SIZE = 1;
  var pageNumber = 0;
  
  
  
  var videoItemsInabled = [];
  
  for (var i = 0; i < videoItems.length; i++) {
    if (videoItems[i].style.display === "none"){
      videoItemsInabled.push(videoItems[i]);
    }
  }
  
  
  function showMore() {
    linkMore.click(function(event){
      event.preventDefault();
        pageNumber++;
        renderReviews(videoItemsInabled, pageNumber, this);
    });
  }
  
  function renderReviews(arr, page, link) {

    var from = page * PAGE_SIZE;
    
    var to = from + PAGE_SIZE;
    
    arr.slice(from, to).forEach(function(items) {
      items.style.display = "block";
    });
    
    if (page === (arr.length - 1)) {
      link.style.display = "none";
    }
    
  }
  showMore();
  
  

});