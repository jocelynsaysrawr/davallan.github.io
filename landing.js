var time = ['3','2','1'];
var mytext = "You have about three seconds to make a first impression online.";
var moretext = 'Hello There mister';
var words = ['impression', 'You', 'three', 'seconds', 'first'];
var heroBG = ['#00bcd4','#2196f3','#7e57c2'];
var bgcolor = 0;

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
            $('.hero-wrapper').css('background', 'rgba(33, 33, 33,'+ bgcolor +')');
            bgcolor += 0.25;
        },i*1000);

    });

    setTimeout(function () {
        $('.hero-wrapper').css('background', 'rgba(33, 33, 33,'+ bgcolor +')');
        $('.timer').html('');

    }, 3000);

    function write(writeText, element) {
        var gNum = 0;
        var timeNext = 0;

        setTimeout(function () {
            $('.'+ element).append('<span class="long-msg"></span>');
            var chars = writeText.split('');
            var nextString = '';
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
    }

    write(mytext, 'timer');

    setTimeout(function(){
        $('.hero').append('<span class="button learn-more">Learn More</span>');
    },8000);

    $(document).on('click','.learn-more', function(){
        console.log('hmm. this works');
        $('.hero-wrapper').height(0);
    });

}); // End DocReady
