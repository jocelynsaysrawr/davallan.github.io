// this is davallan.js

$(document).ready(function(){
   
    var welcome = ['H','e','l','l','o',' ','T','h','e','r','e','!'];
    var time = 100;
    console.log(welcome[1]);
    
    function writeWelcome(){
        $.each(welcome, function(i){
            function writeLetter(){$('.write-box').append(welcome[i])};
            setTimeout(writeLetter, time);
            time += 100;
        });
    }
    
    setTimeout(writeWelcome, 2000);
    
});