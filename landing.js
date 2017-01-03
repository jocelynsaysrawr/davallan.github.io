var time = ['3','2','1'];
var mytext = "You have about three seconds to make a first impression online.";
var gNum = 0;
var timeNext = 0;
var nextString = '';
var words = ['impression', 'You', 'three'];

$(document).ready(function(){

    function highlight(element,wordsArray){
        var text = $('.' + element).html();
        $.each(wordsArray, function(i){
            text = text.replace(wordsArray[i], '<span class="highlight">'+ wordsArray[i] +'</span>');
        });
        $('.' + element).html(text);
    };

    $.each(time, function(i){
        setTimeout(function(){
            $('.timer').html(time[i]);
        },i*1000);
    });

    setTimeout(function () {
        $('body').css('background-color','#444444');
        $('.timer').html('');
    }, 3000);

    setTimeout(function () {
        $('.timer').append('<span class="long-msg"></span>');
        var chars = mytext.split('');

        $.each(chars, function (b) {
            var thisChar = chars[b].toString();
            gNum = Math.floor(Math.random() * 80) + 10;
            if(chars[b] == ' '){ gNum *= 2}
            setTimeout(function () {
                nextString += thisChar;
                $('.long-msg').html(nextString + '<span class="blinker"></span>');
                highlight('long-msg', words);
            }, timeNext + gNum);
            timeNext += gNum;
        });
    }, 3500);






}); // End DocReady
