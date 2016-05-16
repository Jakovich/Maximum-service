"use strict";

$(function () { // wait for document ready
  //отключение горизонтального скролла для планшетов и мобильных
  if ($(window).width() <= 1354) {
    $("#pinContainer").removeAttr("id");
    $("#slideContainer").removeAttr("id");
    $(".panel").removeClass("panel");
  }
  
  //подключение фонового видео
  
  $(".player").mb_YTPlayer();
  
  
  //получение параметров из ссылки
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
  
  
  if(!isNaN(toDateValue)) {
    toCounter.innerHTML = toDateValue;
  }
  
  
  //горизонтальных скролл
  
  var controller = new ScrollMagic.Controller();


		// define movement of panels
  var wipeAnimation = new TimelineMax()
		// animate to second panel
    //.to("#slideContainer", 0.4, {z: 0})// move back in 3D space
    .to("#slideContainer", 2,   {x: "-33.33%", delay: 2})	// move in to first panel
    .to("#slideContainer", 40, {z: 0, delay: 2})				// move back to origin in 3D space
              // animate to third panel
    //.to("#slideContainer", 0.4, {z: -100, delay: 1})
    .to("#slideContainer", 2,   {x: "-66.66%", delay: 2})

    .to("#slideContainer", 40, {z: 0, delay: 2})

	

		// create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: "50%"
  })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    /*.addIndicators() // add indicators (requires plugin)*/
    .addTo(controller);
  
   
  
  //загрузки и показ видео при нажатии на кнопку смотреть еще
  
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
      var iframs = items.querySelectorAll("iframe");
      for (var i = 0; i < iframs.length; i++ ){
        var atr = iframs[i].getAttribute("data-src");
        iframs[i].setAttribute("src", atr);
      }
    });
    
    if (page === (arr.length - 1)) {
      link.style.display = "none";
    }
    
  }
  
  showMore();
  
  // анимация секции диалоговая приемка
  
  var opacityElem = new TimelineMax();
    opacityElem
      .to(".to-test__diagram", 0, {backgroundPosition: "0 0"}, '-=1')
      .to("#firstShow", 0.5, {opacity:1})
      .to(".to-test__diagram", 0, {backgroundPosition: "-325px 0"}, '-=0.5')
      .to(".to-test__diagram", 0, {backgroundPosition: "0 -325px"})
      .to("#secondShow", 0.5, {opacity: 1},'=0.5')
      .to(".to-test__diagram", 0, {backgroundPosition: "-325px -325px"},'-=0.5')
      .to(".to-test__diagram", 0, {backgroundPosition: "-650px -0"})
      .to("#thirdShow", 0.5, {opacity: 1},'=0.5')
      .to(".to-test__diagram", 0, {backgroundPosition: "-650px -325px"},'-=0.5')
      .to(".to-test__diagram", 0, {backgroundPosition: "0 -650px"})
      .to("#forthShow", 0.5, {opacity: 1},'=0.5')
      .to(".to-test__diagram-text", 0.3, {opacity: 1},'-=0.5')
      .to(".to-test__diagram", 0, {backgroundPosition: "-325px -650px"},'-=0.5')
      .to(".to-test__diagram", 0, {backgroundPosition: "-650px -650px"});
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: ".to-test",
    reverse: false
  })
  .setTween(opacityElem) // trigger a TweenMax.to tween
  /*.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)*/
  .addTo(controller);
  
  //скролл вверх при нажатии на кнопку
  
 $("#up-scroll").click(function() {

    $("body,html").animate({scrollTop:0},800);

  });
});