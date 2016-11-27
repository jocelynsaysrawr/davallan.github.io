$(document).ready(function(){

    $('.audio-button').click(function(){

        $('.audio').each(function(i){
            this.pause();
        });

        var thisID = $(this).attr('id');
        var audioID = thisID + 'audio';
        var audio = document.getElementById(audioID);
        console.log('play' + thisID);
        audio.currentTime = 0;
        audio.play();
        return false;
    });
});
