// this is davallan.js

$(document).ready(function(){
    
    $('body, #bg-overlay').height($(window).height());
    
    $(document).on('click', function(){
       $('#bg-overlay').fullscreen(); 
    });
       
});
    
});