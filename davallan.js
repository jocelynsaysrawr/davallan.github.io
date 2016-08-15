// this is davallan.js

$(document).ready(function(){
   
    var welcome = ['H','e','l','l','o',' ','T','h','e','r','e','!'];
    console.log(welcome[1]);
    
    function writeWelcome(){
        $.each(welcome, function(i){
            function writeLetter(){$('.main-pane').append(welcome[i])};
            setTimeout(writeLetter,500);
        });
    }
    
    setTimeout(writeWelcome, 500);
    
});