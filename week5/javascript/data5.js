$(".drag").on('mousedown', function(event){
  var pin = $(this);
  var pinPosition = pin.position();
  var differencePos = {
    x : (pinPosition.left - event.pageX), 
    y : (pinPosition.top - event.pageY)
  };
    
  var setHandlers = {
    mousemove : function(event){
      pin.css({ 
        left : (differencePos.x + event.pageX) + 'px', 
        top : (differencePos.y + event.pageY) + 'px'
      });
    },
    mouseup : function(event){
      $(document).off(setHandlers);
    }
  };
 $(document).on(setHandlers);
  return false;
});

// $(this).on('mousemove', function(event){
  //   pin.css({ 
   //     left : (differencePos.x + event.pageX) + 'px', 
   //     top : (differencePos.y + event.pageY) + 'px'
    //  });
  
 // $(this).on('mouseup', function(event){
  //  $(document).off('mousemove', 'mousedown')
 // });
// });
  
 // var x = (pinPosition.left - evt.pageX);
//  var y = (pinPosition.top - evt.pageY);
 // var differencePos = (x - y);
  
  
  
//$(document).mousemove(function(evt){
  //  pin.style.left = (evt.pageX - x) + "px";
   // pin.style.top = (evt.pageY - y) + "px";
//});
  //$(document).mouseup(function(evt){
  //  pinPosition.left = evt.pageX
  //  pinPosition.right = evt.pageY
    //$(document).off('mousemove', 'mousedown');
//});
//});


