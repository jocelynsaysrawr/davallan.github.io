$(document).ready(function(){
    
    var postList = {};
    var posts = [];
    var postOne = {};
    var newPost = {};

    function updatePosts(){
        $.ajax({
            url:"https://api.myjson.com/bins/16kzld",
            type:"PUT",
            data: JSON.stringify(postList),
            contentType:"application/json; charset=utf-8",
            dataType:"json",
            success: function(data, textStatus, jqXHR){
                console.log(textStatus);
                $('.add-post').removeClass('form-open');
                $('.post-form').fadeOut();
                location.reload();
            }
        });
     });

    function addPost(){
        $.get("https://api.myjson.com/bins/16kzld", function(data, textStatus, jqXHR) {
            postList = data;
            postList.posts.unshift(newPost);
            if(postList.posts.length > 200){
                postList.posts.length = 200;
            }
            console.log(postList);
            updatePosts();
        });
    }

    // GET POSTS FROM MYJSON.com

    $.get("https://api.myjson.com/bins/16kzld", function(data, textStatus, jqXHR) {
        postList = data;
        console.log(postList);
        posts = data.posts;
        postOne = posts[0];

        $.each(posts, function(i){
            $('.bod').append(
                '<div class="post-wrapper">' +
                    '<h1>' + posts[i].post.title + '</h1>' +
                    '<div class="auth">' + posts[i].author.name + '</div>' +
                    '<div class="thanklist">'+ posts[i].post.body +'</div>' +
                '</div>'
            );
        });

        console.log(postList);

    });

    $('.add-post').click(function(){
        if($(this).hasClass('form-open')){
            $('.post-form').css('height','0px');
            $(this).css('transform','rotate(0deg)').removeClass('form-open');
        } else {
            $('.post-form').css('height','100vh');
            $(this).css('transform','rotate(45deg)').addClass('form-open');
            $('#postTitle').focus();
        }
    });

    $('#submit-post').click(function(){
        var postTitle = $('#postTitle').val();
        var fullName = $('#fullName').val();
        var body = $('#body').val().replace(/(?:\r\n|\r|\n)/g, '<br />');;
        var id = Math.floor((Math.random() * 102425245222) + 1);
        var date = 20160124;


        newPost.author = {};
        newPost.post = {};
        newPost.id = id;
        newPost.date = date;
        newPost.author.name = fullName;
        newPost.post.title = postTitle;
        newPost.post.body = body;
        console.log(newPost);

        addPost();

    });

    $('input,textarea').keyup(function(){
        if($('#postTitle').val() && $('#fullName').val() && $('#body').val().length > 5){
            $('#submit-post').css('opacity','1');
        } else {
            $('#submit-post').hide('opacity','0');
        }
    });


});
