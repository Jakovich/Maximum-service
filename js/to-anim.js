
$(function () {
  var opacityElem = new TimelineMax();
    opacityElem
      .to(".to-test__diagram", 0, {backgroundPosition: "0 0"}, '-=0.5')
      .to("#firstShow", 1, {opacity:1})
      .to(".to-test__diagram", 0, {backgroundPosition: "-325px 0"}, '-=1')
      .to(".to-test__diagram", 0, {backgroundPosition: "0 -325px"},'-=0.2')
      .to("#secondShow", 1, {opacity: 1},'=1')
      .to(".to-test__diagram", 0, {backgroundPosition: "-325px -325px"},'-=1')
      .to(".to-test__diagram", 0, {backgroundPosition: "-650px -0"},'=0.2')
      .to("#thirdShow", 1, {opacity: 1},'=1')
      .to(".to-test__diagram", 0, {backgroundPosition: "-650px -325px"},'-=1')
      .to(".to-test__diagram", 0, {backgroundPosition: "0 -650px"},'=0.2')
      .to("#forthShow", 1, {opacity: 1},'=1')
      .to(".to-test__diagram-text", 1, {opacity: 1},'-=1')
      .to(".to-test__diagram", 0, {backgroundPosition: "-325px -650px"},'-=1')
      .to(".to-test__diagram", 0, {backgroundPosition: "-650px -650px"},'=0.2');
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: ".to-test",
    offset: 300,
    reverse: false
  })
  .setTween(opacityElem) // trigger a TweenMax.to tween
  /*.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)*/
  .addTo(controller);
  });
