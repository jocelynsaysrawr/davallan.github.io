// this is davallan.js

$(document).ready(function(){

    var greetings = ['Hello', 'Greetings', 'Salutations', 'Hi', 'Howdy', 'Good Day'];
    var gNum = Math.floor(Math.random() * 6);

    $('#greeting').html(greetings[gNum] + '.');

    $.ajax({
        url: "https://cdn.contentful.com/spaces/5n3n03bm8c2b/entries?access_token=47c9c8670688438ae1bec2f39c892d52fc1f045599e4a090ae983ff5c01df37f",
        success: function(e){
            var posts = e.items;
            // console.log(posts[0].fields.title);
            $.each(posts, function(i){
                var imgUrl = '';
                $('.posts').append(
                    '<div class="post-wrapper">' +
                        '<h3 class="title">' + posts[i].fields.title + '</h3>' +
                        '<span class="body">' + posts[i].fields.body.replace(/\n/g, '<br/>') + '</span>' +
                    '</div>'
                );
            });
        }
    });

});
