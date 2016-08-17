// this is davallan.js

$(document).ready(function(){
    
    $('#bg-overlay').height($(window).height());
    
    $(document).on('click', '.enter-button', function(){
        $(this).fadeOut('fast');
        $('body').fadeOut('fast');
        $('#bg-overlay').fullScreen(); 
        
        setTimeout(
        function(){
            $('#bg-overlay').height($(window).height());
            $('.bottom-nav').css('bottom', '0').fadeIn();
            $('body').fadeIn('slow');
        },1500);
        
    });
           
});