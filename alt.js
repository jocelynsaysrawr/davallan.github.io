$(document).ready(function(){

    $('.sticky-header').mouseenter(function(){
        $('.menu-item').addClass('open');
    });

    $('.sticky-header').mouseleave(function(){
        $('.menu-item').removeClass('open');
    });

});
