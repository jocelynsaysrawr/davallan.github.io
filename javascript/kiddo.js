$(document).ready(function(){
    $('#horn').click(function(){
        console.log('play horn');
        $('#hornaudio').play();
        return false;
    });
});
