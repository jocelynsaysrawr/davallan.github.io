$(document).ready(function(){

    var possible = ['a1','a2','a3','b1','b2','b3','c1','c2','c3'];
    var wins = [
        ['a1','a2','a3'],
        ['b1','b2','b3'],
        ['c1','c2','c3'],
        ['a1','b1','c1'],
        ['a2','b2','c2'],
        ['a3','b3','c3'],
        ['a1','b2','c3'],
        ['a3','b2','c1']
    ];

    var turn = 'player';
    var totalTurns = 9;
    var playerPlayed = [];
    var jsPlayed = [];

    $('.ttt-container div').click(function(){
        if(turn == 'player'){
            $(this).html('x');
            var code = $(this).attr('id');
            possible = $.grep(possible,function(a){
                return a != code;
            });
            playerPlayed.push(code);
            turn = 'js';
            checkWin(playerPlayed,'player');
        }
    });

    function checkWin(array,player) {
        totalTurns-=1;
        var thisarray = array.sort().toString();
        console.log(thisarray);
        for(i = 0; i < wins.length; i++){
            var thisWin = wins[i].sort().toString();
            console.log(thisWin);
            if(thisarray.indexOf(thisWin) >= 0){
                $('body').css('background-color','green');
            } else {
                if(turn == 'js'){
                    jsPlay();
                }
            }
        }
    }

    function jsPlay(){
        var randomPlay = possible[Math.floor(Math.random()*possible.length)];
        var id = '#'+randomPlay;
        $(id).html('o');
        possible = $.grep(possible,function(a){
            return a != randomPlay;
        });
        jsPlayed.push(randomPlay);
        turn = 'player';
        checkWin(jsPlayed,'js');
    }


});
