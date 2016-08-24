// this is davallan.js

$(document).ready(function(){
    
    $('#bg-overlay').height($(window).height());
    
    $(document).on('click', '.enter-button', function(){
        $(this).fadeOut('fast');
        $('body').fadeOut('fast');
        $('#bg-overlay').fullScreen(); 
        $('.greeting').hide();
        
        setTimeout(
        function(){
            $('#bg-overlay').height($(window).height());
            $('.bottom-nav').css('bottom', '0').fadeIn();
            $('body').fadeIn('slow');
            $('.back-color').css('background-color','orangered');
        },1500);
        
    });
    
    $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=2f9557344467c41a762ab15727fd46a1&photo_id=28165318402&format=json',
        function(e){
            console.log(e);
            var json = $.parseJSON(e,true);
            var sizes = json.sizes;
            sizes.each(function(i){
                if (i.label == 'Original'){
                    source = i.source;
                }
            });
            console.log(source);
        });
           
});