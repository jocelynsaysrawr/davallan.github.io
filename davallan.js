// this is davallan.js

$(document).ready(function(){


    $.ajax({
        url: "https://cdn.contentful.com/spaces/5n3n03bm8c2b/entries?access_token=47c9c8670688438ae1bec2f39c892d52fc1f045599e4a090ae983ff5c01df37f",
        success: function(e){
            var posts = e.items;
            console.log(posts[0].fields.title);
            $.each(posts, function(i){
                var imgUrl = '';
                $('body').append(
                    '<div class="post-wrapper">' +
                        '<span class="title">' + posts[i].fields.title + '</span>' +
                        '<span class="body">' + posts[i].fields.body.replace(/\n/g, '<br/>') + '</span>' +
                    '</div>'
                );
            });
        }
    });

});
