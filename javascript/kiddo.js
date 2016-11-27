$(document).ready(function(){

    var horn = document.getElementById('hornaudio');

    $('#horn').click(function(){
        console.log('play horn');
        horn.play();
        return false;
    });
});
