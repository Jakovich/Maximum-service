
$(function () {
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
  });
