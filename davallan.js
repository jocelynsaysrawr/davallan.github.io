// this is davallan.js

$(document).ready(function(){
    
   $(document).on("click", function() {
    var el = $('.bg-overlay');
    var rfs =
           el.requestFullScreen
        || el.webkitRequestFullScreen
        || el.mozRequestFullScreen
    ;
       
   $(el).requstFullScreen;
       
       $('.bg-overlay').height($(window).height);
});
    
});