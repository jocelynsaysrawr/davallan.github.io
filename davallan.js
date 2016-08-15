// this is davallan.js

$(document).load(function(){
   
    var welcome = ['H','e','l','l','o',' ','T','h','e','r','e','!'];
    
    $(welcome).each(function(i){
        $('.main-pane').append(welcome[i]);
    });
    
});