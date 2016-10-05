// this is davallan.js

$(document).ready(function(){
    
    $('.bottom-nav, .nav-back, .nav-forward').hide();
    var step = 0;
    var textRelay = [
        "Chances are you have already heard of the famous K.I.S.S. principle...",
        "The idea was introduced by the United States Navy around the year 1960...",
        "K.I.S.S. is an acronym for the phrase \"Keep It Simple, Stupid\"...",
        "It is a design principle that suggests that the simplest solution to a problem is usually the best one."
    ];
    
    var bgColorLoop = ['orangered','white','orange','white','royalblue','white','royalblue'];
    var bgImageLoop = ['images/design-desk.jpg','images/design-desk.jpg','images/design-desk.jpg','images/design-desk.jpg'];
    
    $('#bg-overlay').height($(window).height());
    $('.text-box').hide();
    var posTop = $(window).height() / 2 - $('.text-box').outerHeight();
    $('.text-box').css('top', posTop);
    
    $(document).on('click', '.enter-button', function(){
        $(this).fadeOut('fast');
        $('body').fadeOut('fast');
        $('#bg-overlay').fullScreen(); 
        $('.greeting').hide();
        
        setTimeout(
        function(){
            $('#bg-overlay').height($(window).height());
            $('.bottom-nav').css('bottom', '0');
            $('body').fadeIn('slow');
            $('.back-color').css('background-color','orangered');
        }, 1500);
    
        setTimeout(function(){
            $('.text-box').fadeIn(); 
            writeText(0);
        }, 2500);
        
    }); // End of Enter Click Function
    
    $('.nav-forward').click(function(){
        step++;
        $('.text-box').fadeIn(); 
        writeText(step);
    });
    
    $('.nav-back').click(function(){
        step--;
        $('.text-box').fadeIn(); 
        writeText(step);
    });
    
    function writeText(e){
        $('.back-color').css('background-color', bgColorLoop[e]);
        
        if(bgColorLoop[e] == 'white'){
            var newE = e+1;
            $('.text-box, .navcon').css('color', bgColorLoop[newE]);
        } else {
           $('.text-box, .navcon').css('color', 'white'); 
        }
//        if(bgImageLoop[e]) {
//            $('.back-color').css('background-image', 'url(' + bgImageLoop[e] + ')');
//        }
        $('.text-box').html('');
        $('.bottom-nav, .nav-forward, .nav-back').hide();
        var splitText = textRelay[e].split('');
        var splitInt = 0;
        var id = setInterval(write, 40);

        function write() {
            if (splitInt == splitText.length){
                clearInterval(id);
                if(step >= 1){ $('.nav-back').show();}
                if(step < textRelay.length-1) { $('.nav-forward').show();}
                $('.bottom-nav').fadeIn();
            } else {
                $('.text-box').append(splitText[splitInt]);
                splitInt++;
            }
        }
    }
           
});