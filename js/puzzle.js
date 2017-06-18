$(document).ready(function(){

    var possible = ['a1','a2','a3','b1','b2','b3','c1','c2','c3'];
    var playerwins = [
        ['a1','a2','a3'],
        ['b1','b2','b3'],
        ['c1','c2','c3'],
        ['a1','b1','c1'],
        ['a2','b2','c2'],
        ['a3','b3','c3'],
        ['a1','b2','c3'],
        ['a3','b2','c1']
    ];

    var jswins = [
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
    var gameOn = 1;

    $('.ttt-container div').click(function(){
        if(turn == 'player' && gameOn && totalTurns && !$(this).hasClass('played')){
            $(this).html('<i class="fa fa-times" aria-hidden="true"></i>').addClass('played');
            var code = $(this).attr('id');
            $.each(playerwins,function(i){
                playerwins[i] = $.grep(playerwins[i],function(a){
                    return a != code;
                });
                if(playerwins[i].length <= 0){
                    $('body').css('background-color','#4caf50');
                    gameOn = 0;
                }
            });
            possible = $.grep(possible,function(a){
                return a != code;
            });
            playerPlayed.push(code);
            turn = 'js';
            if(gameOn){
                jsPlay();
            }
        }
    });

    function jsPlay(){
        var randomPlay = possible[Math.floor(Math.random()*possible.length)];
        var id = '#'+randomPlay;
        $(id).html('<i class="fa fa-circle-o" aria-hidden="true"></i>');
        $.each(playerwins,function(i){
            jswins[i] = $.grep(jswins[i],function(a){
                return a != randomPlay;
            });
            if(jswins[i].length <= 0){
                $('body').css('background-color','#4caf50');
            }
        });
        possible = $.grep(possible,function(a){
            return a != randomPlay;
        });
        jsPlayed.push(randomPlay);
        turn = 'player';
        // checkWin(jsPlayed,'js');
    }


});
