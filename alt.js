$(document).ready(function(){

    $('.menu-logo').click(function(){
        $('.menu-item').toggleClass('open');
        $('.menu-icon').toggleClass('icofont-close');
        $('.menu-icon').toggleClass('icofont-navigation-menu');
        $('.menu-logo').toggleClass('open');
    });

});
