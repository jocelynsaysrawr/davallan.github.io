// this is davallan.js

$(document).ready(function(){
    
    $('body, #bg-overlay').height($(window).height());
    
    $(document).on('click', '.title', function(){
       $('#bg-overlay').fullScreen(); 
        $('body, #bg-overlay').height($(window).height());
    });
           
});