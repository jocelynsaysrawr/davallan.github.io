$(document).ready(function(){

    var horn = $('#hornaudio');

    $('#horn').click(function(){
        console.log('play horn');
        horn.play();
        return false;
    });
});
