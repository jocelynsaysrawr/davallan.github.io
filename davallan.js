// this is davallan.js

$(document).ready(function(){
    
    var minOrder = $('.section').first().data('order');
    var maxOrder = $('.section').last().data('order');
    
    function navHideShow() {
        if($('.nav-up').data('order') == '0'){
            $('.nav-up').hide();
        } else {
            $('.nav-up').show();
        }

        if($('.nav-down').data('order') == maxOrder){
            $('.nav-down').hide();
        } else {
            $('.nav-down').show();
        }
    }
    
    navHideShow();
    
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
            $('body, html').animate({
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
    
    var timer = null;
    
    $(document).on('scroll',function(){
        clearTimeout($.data(this, 'scrollTimer'));
        var topDoc = $('body,html').offset().top - $(window).scrollTop();
        
        $.data(this, 'scrollTimer', setTimeout(function() {
        
            console.log("Haven't scrolled in 250ms!");
        
            $('.section').each(function(i){
                var section = $(this);
                var topDist = $(this).offset().top - $(window).scrollTop();
                if (topDist >= -200 && topDist <= 300){
                    var thisVal = $(this).data('order');
                    
                    $('body, html').animate({
                        scrollTop: section.offset().top
                    }, 800);

                    if (thisVal+1 <= maxOrder){
                        $('.nav-down').data('order', thisVal+1);
                    }
                    if (thisVal-1 >= minOrder){
                        $('.nav-up').data('order', thisVal-1);
                    }
                    if (thisVal == minOrder){
                        $('.nav-up').hide();
                    } else if (thisVal == maxOrder){
                         $('.nav-down').hide();
                    } else {
                        $('.nav-down, .nav-up').show();
                    }
                }
            });

            if(topDoc < -80){
                $('.me-wrapper').fadeOut('fast');
            } else {
                $('.me-wrapper').fadeIn('fast');
            }
            
        }, 250));
    });
    
    
    
//    function launchFullScreen(element) {
//      if(element.requestFullScreen) {
//        element.requestFullScreen();
//      } else if(element.mozRequestFullScreen) {
//        element.mozRequestFullScreen();
//      } else if(element.webkitRequestFullScreen) {
//        element.webkitRequestFullScreen();
//      }
//    }
//    
//    $('.icofont').click(function(){
//        console.log('full');
//       launchFullScreen(document.body); 
//    });
    
});