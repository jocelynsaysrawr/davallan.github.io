// this is davallan.js

$(document).ready(function(){
    
    var textRelay = [
        "Hello. I'm glad you are here! We've got a lot of catching up to do.",
        "My name is David Shafer, and I am a front end web developer. I love what I do!"
    ];
    
    $('#bg-overlay').height($(window).height());
    $('.text-box').hide();
    var posTop = $(window).height() / 2 - $('.text-box').outerHeight();
    $('.text-box').css('top', posTop);
    
    $(document).on('click', '.enter-button', function(){
        $(this).fadeOut('fast');
        $('body').fadeOut('fast');
        $('#bg-overlay').fullScreen(); 
        $('.greeting').hide();
        
        function writeText(e){
            $('.text-box').html('');
            var splitText = textRelay[e].split('');
            console.log('split text');
            console.log(splitText);
            var splitInt = 0;
            if (splitInt <= splitText.length){
                setInterval(function(){
                    $('.text-box').append(splitText[splitInt]);
                    splitInt++;
                }, 60);
            }
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
            writeText(0);
        }, 2500);
        
        setTimeout(function(){
             $('.back-color').css('background-color', 'royalblue');
            $('.text-box').fadeIn(); 
            writeText(1);
        }, 4500);
        
    });
           
});