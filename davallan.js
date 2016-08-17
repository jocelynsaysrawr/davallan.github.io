// this is davallan.js

$(document).ready(function(){
    
    $('#bg-overlay').height($(window).height());
    
    $(document).on('click', '.title', function(){
       $('#bg-overlay').fullScreen(); 
        $('#bg-overlay').height($(window).height());
    });
           
});