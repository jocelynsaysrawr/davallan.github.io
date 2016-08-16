// this is davallan.js

$(document).ready(function(){
    
   addEventListener("click", function() {
    var
      el = document.getElementById('#greeting')
    , rfs =
           el.requestFullScreen
        || el.webkitRequestFullScreen
        || el.mozRequestFullScreen
    ;
    rfs.call(el);
});
    
});