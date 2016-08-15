// this is davallan.js

$(document).ready(function(){
   
    var welcome = ['H','e','l','l','o',' ','T','h','e','r','e','!'];
    console.log(welcome[1]);
    
    $.each(welcome, function(i){
        $('.main-pane').append(welcome[i]).delay(5000);
    });
    
});