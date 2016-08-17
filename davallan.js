// this is davallan.js

$(document).ready(function(){
    
   addEventListener("click", function() {
    var
      el = document.getElementById('#bg-overlay')
    , rfs =
           el.requestFullScreen
        || el.webkitRequestFullScreen
        || el.mozRequestFullScreen
    ;
    rfs.call(el);
       
        $('#bg-overlay').height($(window).height());
});
    
});