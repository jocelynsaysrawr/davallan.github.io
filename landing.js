$(document).ready(function(){
    var date = new Date();
    var year = date.getFullYear();
    var day = date.getDate();
    var month = months[date.getMonth()];
    var postDate = month + ' ' + day;
    var postList = {};
    var posts = [];
    var postOne = {};
    var newPost = {};
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var pin = '';
    
     function findWithAttr(array, attr, value) {
                for(var i = 0; i < array.length; i += 1) {
                    if(array[i][attr] === value) {
                        return i;
                    }
                }
                return -1;
            }

    function updatePosts(){
        $.ajax({
            url:"https://api.myjson.com/bins/zvflt",
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
     }

    function addPost(){
        $.get("https://api.myjson.com/bins/zvflt", function(data, textStatus, jqXHR) {
            postList = data;
            postList.posts.unshift(newPost);
//             if(postList.posts.length > 200){
//                 postList.posts.length = 200;
//             }
            updatePosts();
        });
    }

    // GET POSTS FROM MYJSON.com

    $.get("https://api.myjson.com/bins/zvflt", function(data, textStatus, jqXHR) {
        postList = data;
        posts = data.posts;
        postOne = posts[0];

        $.each(posts, function(i){
            var pd = posts[i].date
            var postda = pd.split(' ');
            var mo = postda[0];
            var da = postda[1];
            var today = false;
            if(mo == months[date.getMonth()] && da == day){today = true}
            console.log(today);
            $('.bod').append(
                '<div class="post-wrapper" data-postid="'+ posts[i].id +'">' +
                    '<div class="thanklist">'+ posts[i].post.body +'</div>' +
                    '<div class="auth">' + posts[i].author.name + ' -  ' + posts[i].date +'</div>' +
                '</div>'
            );
        });
        
        if(postList.posts.length > 0){
            $.ajax({
                url:"https://api.myjson.com/bins/a2j0p",
                type:"PUT",
                data: JSON.stringify(postList),
                contentType:"application/json; charset=utf-8",
                dataType:"json",
                success: function(data, textStatus, jqXHR){
                    console.log(textStatus);
                    console.log('backed up to a2j0p');
                }
            });
        }
        
    });

    $('.add-post').click(function(){
        if($(this).hasClass('form-open')){
            $('.post-form').css('height','0px');
            $(this).css('transform','rotate(0deg)').removeClass('form-open');
        } else {
            $('.post-form').css('height','100vh');
            $(this).css('transform','rotate(45deg)').addClass('form-open');
            $('#fullName').focus();
        }
    });

    $('#submit-post').click(function(){
        if(pin == 'AM17'){
          
            var fullName = $('#fullName').val();
            var body = $('#body').val().replace(/(?:\r\n|\r|\n)/g, '<br />');;
            var id = Math.floor((Math.random() * 102425245222) + 1);

            newPost.author = {};
            newPost.post = {};
            newPost.id = id;
            newPost.date = postDate;
            newPost.author.name = fullName;
            newPost.post.body = body;

            addPost();
        }

    });

    $('input,textarea').keyup(function(){
        pin = $('#pin').val().toUpperCase();
        if($('#fullName').val() && $('#body').val().length > 5 && pin == 'AM17'){
            $('#submit-post').css('opacity','1');
        } else {
            $('#submit-post').hide('opacity','0');
        }
    });

    $(document).on('click','.post-wrapper', function(){
        var thisPost = $(this);
        var thisID = thisPost.data('postid');
        pin = $('#pin').val().toUpperCase();
        console.log(thisID);
        if(pin == 'DELETEPOST'){
            console.log('delete post');
            thisPost.css('background','#f44336');
            var postPos = findWithAttr(postList.posts, 'id', thisID);
            console.log(postPos);
            postList.posts.splice(postPos,1);
            updatePosts();
        }
    });
  
    
    
});
