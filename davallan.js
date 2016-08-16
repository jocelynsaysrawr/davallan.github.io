// this is davallan.js

$(document).ready(function(){
    
   $(document).on("click", function() {
    var el = document.body
    var rfs =
           el.requestFullScreen
        || el.webkitRequestFullScreen
        || el.mozRequestFullScreen
    ;
    rfs.call(el);
       
       $('.body').height($(window).height());
});
    
});