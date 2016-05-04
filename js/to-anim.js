$(function () {
  var wh = window.innerHeight,
  $item = $('.to-test__ecplic-item');

 
  var ctrl = new ScrollMagic.Controller({
     globalSceneOptions: {
         triggerHook: 'onLeave'
     }
 });
 
 // Создаем сцену
 $(".to-test").each(function() {
    
     new ScrollMagic.Scene({
         triggerElement: this,
         duration: '50%'
     })
     .setPin(this)
     .addTo(ctrl);
 });
 
});