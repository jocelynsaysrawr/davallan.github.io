// this is davallan.js

$(document).ready(function(){
   
    var welcome = ['H','e','l','l','o',' ','T','h','e','r','e','!'];
    console.log(welcome[1]);
    
    function writeWelcome(){
        $.each(welcome, function(i){
            setTimeout({$('.main-pane').append(welcome[i])},5000);
        });
    }
    
    setTimeout(writeWelcome, 5000);
    
});