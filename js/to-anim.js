$(function () {
  var firstItem = $("#firstShow");
  var secondItem = $("#secondShow");
  var thirdItem = $("#thirdShow");
  var forthItem = $("#forthShow");
  
  var opacityElem = new TimelineMax();
      opacityElem       
          .to("#firstShow", 1, {opacity:1})
          .to("#secondShow", 1, {opacity: 1},'=1')
          .to("#thirdShow", 1, {opacity: 1},'=1')
          .to("#forthShow", 1, {opacity: 1},'=1')
          .to(".to-test__diagram-text", 1, {opacity: 1},'-=1');
  

  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: ".to-test",
    offset: 400
  })
  .setTween(opacityElem) // trigger a TweenMax.to tween
  .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
  .addTo(controller);
  });
