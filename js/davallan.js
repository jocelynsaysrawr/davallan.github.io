// this is davallan.js

$(document).ready(function(){
    $('.enter-button').click(function(){
        var hft = $('.section.work').position().top;
        $("html, body").animate({ scrollTop: hft +"px" });
    });
});
