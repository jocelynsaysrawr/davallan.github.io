// this is davallan.js

$(document).ready(function(){
    
    $('#bg-overlay').height($(window).height());
    $('.text-box').hide();
    var posTop = $(window).height() / 2 - $('.text-box').outerHeight() / 2;
    $('.text-box').css('top', posTop);
    
    $(document).on('click', '.enter-button', function(){
        $(this).fadeOut('fast');
        $('body').fadeOut('fast');
        $('#bg-overlay').fullScreen(); 
        $('.greeting').hide();
        $('.text-box').html('Hello. I\'m glad you are here! We\'ve got a lot of catching up to do.');
        
        setTimeout(
        function(){
            $('#bg-overlay').height($(window).height());
            $('.bottom-nav').css('bottom', '0').fadeIn();
            $('body').fadeIn('slow');
            $('.back-color').css('background-color','orangered');
        }, 1500);
        
        setTimeout(function(){
            $('.text-box').fadeIn(); 
        }, 2500);
        
    });
           
});