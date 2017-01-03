var time = ['3','2','1'];
var mytext = "That's all the time you have to make a first impression online.";
var gNum = 0;
var timeNext = 0;
var nextString = '';
$(document).ready(function(){

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
            }, timeNext + gNum);
            timeNext += gNum;
        });
    }, 3500);

}); // End DocReady
