// this is davallan.js

$(document).ready(function(){
    
    var minOrder = $('.window-section').first().data('order');
    var maxOrder = $('.window-section').last().data('order');
    
    console.log(minOrder + ' ' + maxOrder);
    
    $('.nav').click(function(event){
        var eventTarget = $(event.target);
        var thisOrder = $(this).data('order');
        var target = $('.section'+thisOrder);
        if ($(this).hasClass('nav-down') && thisOrder <= maxOrder){
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
            
            $('.nav').each(function(i){
                var order = $(this).data('order');
                $(this).data('order', order+=1);
            });
        } else if ($(this).hasClass('nav-up') && thisOrder >= minOrder) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
            $('.nav').each(function(i){
                var order = $(this).data('order');
                $(this).data('order', order-=1);
            });
        } else {
            // do nothing
        }
    
    });
});