$(document).ready(function(){
  var $container = $('body'),
      $layer_1 = $('#js-background'),
      $layer_2 = $('.universe'),
      container_w = $container.width(),
      container_h = $container.height();

  $(window).on('mousemove.parallax', function(event) {
    var pos_x = event.pageX,
        pos_y = event.pageY,
        left  = 0,
        top   = 0;


    left = container_w / 2 - pos_x;
    top  = container_h / 2 - pos_y;

    TweenMax.to(
      $layer_1,1,
      {
        css: {
          transform: 'translateX(' + left / 10 + 'px) translateY(' + top / 10 + 'px)'
        },
        ease:Expo.easeOut,
        overwrite: 'all'
      });

    TweenMax.to($layer_2, 1,
      {
        css: {
          transform: 'translateX(' + left / 30 + 'px) translateY(' + top / 30 + 'px)'
        },
        ease:Expo.easeOut,
        overwrite: 'all'
      });


  });
})
