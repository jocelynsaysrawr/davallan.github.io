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
    
    $.get('https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=2f9557344467c41a762ab15727fd46a1&photo_id=28165318402&format=rest&auth_token=72157672883510785-110320266b822668&api_sig=2d01f3e6f6ec0b8943dcf271431c8d09',
        function(e){
            console.log(e);
            var source = '';
            $('#document').find('size').each(function(e){
               if (e.attr('label') === 'Original') {
                   source = e.attr('source');
               } 
            });
            console.log(source);
        });
           
});