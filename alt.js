$(document).ready(function(){

    $('.sticky-header').click(function(){
        $('.menu-item').toggleClass('open');
        $('.menu-icon').toggleClass('icofont-close');
        $('.menu-icon').toggleClass('icofont-navigation-menu');
        $('.menu-logo').toggleClass('open');
    });

});
