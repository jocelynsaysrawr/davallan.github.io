$(document).ready(function(){

    var currentdevo = 0;
    var devolist = {};
    var devokeys = [];

      // Initialize Firebase
    //   var config = {
    //     apiKey: "AIzaSyBQf4uTTOTZg7dGE6K2bykN-s5SkROJknw",
    //     authDomain: "devo-432e2.firebaseapp.com",
    //     databaseURL: "https://devo-432e2.firebaseio.com",
    //     storageBucket: "devo-432e2.appspot.com",
    //     messagingSenderId: "199108588081"
    //   };
    //   firebase.initializeApp(config);


    var database = firebase.database();

    function newDevo(devoId, title, body, author, date) {
      firebase.database().ref('devos/' + devoId).set({
        title: title,
        body: body,
        author: author,
        date: date
      });
    }

    function navdevo(list, x){
        $('.post-cont').html(
            '<div class="post-wrapper">' +
                '<h2 class="post-title">' + list[x].title + '</h2>' +
                '<p class="post-body">' + list[x].body + '</p>' +
                '<span class="post-author">' + list[x].author + '</span>' +
                '<span class="post-date">' + list[x].date + '</span>' +
            '</div>'
        );
    }

    // Below sets a listener on the user list and returns it if changed

    var devos = firebase.database().ref('devos');
    devos.on('value', function(snapshot) {
        console.log(snapshot.val());
        devolist = snapshot.val();
        devokeys = Object.keys(devolist);
        navdevo(devolist, devokeys[currentdevo]);
    });

    // Below writes to user list on click... runs the snapshot above on change

    $( "#submit-form" ).click(function(e) {
        console.log('post submit triggered');
        //This is where we will submit a new post
        newDevo(
            Math.floor((Math.random() * 100000000000) + 1),
            'This is another Title',
            'This is the exceptionally longer body of text right here. You will find that this is something to be reasoned with.',
            'Allan Shafer',
            20160211
        );
    });

    $('.next').click(function(){
        if(currentdevo < devokeys.length - 1){
            navdevo(devolist,devokeys[currentdevo+=1]);
        }
    });

    $('.back').click(function(){
        if(currentdevo > 0){
            navdevo(devolist,devokeys[currentdevo-=1]);
        }
    });


});
