$(document).ready(function(){



let $ball = $('#ball'); // cache our ball ;)

$('.btn').on('click',function(){
  var direction = $(this).data('move');
  $ball.stop(1); // clear animation queue
  switch (direction){
    case 'up':
      $ball.animate({top:'-=30'});
      break;
    case 'down':
      $ball.animate({top:'+=120'});
      break;
    case 'left':
      $ball.animate({left:'-=30'});
      break;
    case 'right':
      $ball.animate({left:'+=30'});
      break;
  }
});
});
