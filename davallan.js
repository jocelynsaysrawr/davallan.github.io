// this is davallan.js

$(document).ready(function(){
    
    var minOrder = $('.section').first().data('order');
    var maxOrder = $('.section').last().data('order');
    
    console.log(minOrder + ' ' + maxOrder);
    
    $('.nav').click(function(event){
        var eventTarget = $(event.target);
        var thisOrder = $(this).data('order');
        var target = $('.section'+thisOrder);
        if ($(this).hasClass('nav-down') && thisOrder <= maxOrder){
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
            
//            $('.nav').each(function(i){
//                var order = $(this).data('order');
//                $(this).data('order', order+1);
//            });
        } else if ($(this).hasClass('nav-up') && thisOrder >= minOrder) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
//            $('.nav').each(function(i){
//                var order = $(this).data('order');
//                $(this).data('order', order-1);
//            });
        } else {
            // do nothing
        }
    
    });
    
    $(document).on('scroll',function(){
        $('.section').each(function(i){
            var topDist = $(this).offset().top - $(window).scrollTop();
            if (topDist >= -25 && topDist <= 100){
                var thisVal = $(this).data('order');
                if (thisVal+1 <= maxOrder){
                    $('.nav-down').data('order', thisVal+1);
                }
                if (thisVal-1 >= minOrder){
                    $('.nav-up').data('order', thisVal-1);
                }
            }
        });
    });
    
});