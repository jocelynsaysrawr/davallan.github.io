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

    $('.full-it').click(function(){
        launchIntoFullscreen(document.documentElement);
    });

    function launchIntoFullscreen(element) {
      if(element.requestFullscreen) {
        element.requestFullscreen();
      } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }

});
