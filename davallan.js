// this is davallan.js

$(document).ready(function(){
    
    var textRelay = ["Hello. I'm glad you are here! We've got a lot of catching up to do."]
    
    $('#bg-overlay').height($(window).height());
    $('.text-box').hide();
    var posTop = $(window).height() / 2 - $('.text-box').outerHeight();
    $('.text-box').css('top', posTop);
    
    $(document).on('click', '.enter-button', function(){
        $(this).fadeOut('fast');
        $('body').fadeOut('fast');
        $('#bg-overlay').fullScreen(); 
        $('.greeting').hide();
        writeText(0);
        
        function writeText(e){
            var splitText = textRelay[e].split('');
            $.each(splitText, function(i){
                setTimeout(
                function(){
                    $('.text-box').append(splitText[i]);
                },250);
            });
        }
        
        setTimeout(
        function(){
            $('#bg-overlay').height($(window).height());
            $('.bottom-nav').css('bottom', '0');
            $('body').fadeIn('slow');
            $('.back-color').css('background-color','orangered');
        }, 1500);
        
        setTimeout(
            function(){
                $('.bottom-nav').fadeIn();
            }, 60000
        );
        
        setTimeout(function(){
            $('.text-box').fadeIn(); 
        }, 2500);
        
        
        
    });
           
});