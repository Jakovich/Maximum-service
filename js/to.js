$(function () { // wait for document ready
		// init
  var controller = new ScrollMagic.Controller();

		// define movement of panels
  var wipeAnimation = new TimelineMax()
			// animate to second panel
  .to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
  .to("#slideContainer", 1,   {x: "-33.33%"})	// move in to first panel
  .to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
			// animate to third panel
  .to("#slideContainer", 0.5, {z: -150, delay: 1})
  .to("#slideContainer", 1,   {x: "-66.66%"})
  .to("#slideContainer", 0.5, {z: 0})

	

		// create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: "100%"
  })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});