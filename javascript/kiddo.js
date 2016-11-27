$(document).ready(function(){

    $('.button').click(function(){
        var thisID = $(this).attr('id');
        var audioID = thisID + 'audio';
        var audio = document.getElementById(audioID);
        console.log('play' + thisID);
        audio.play();
        return false;
    });
});
