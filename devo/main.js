$(document).ready(function(){

    var currentdevo = 0;
    var devolist = {};
    var devokeys = [];

    //   Initialize Firebase

    var config = {
        apiKey: "AIzaSyBQf4uTTOTZg7dGE6K2bykN-s5SkROJknw",
        authDomain: "devo-432e2.firebaseapp.com",
        databaseURL: "https://devo-432e2.firebaseio.com",
        storageBucket: "devo-432e2.appspot.com",
        messagingSenderId: "199108588081"
    };

    firebase.initializeApp(config);

    // Initialize Signin

    function triggerGoogleSignin() {

        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            console.log(token);
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    $('.google-login').click(function(){
        triggerGoogleSignin();
    });


// Login Check

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            $('body').append('<div>User logged in</div>');
            console.log(user);
        } else {
            $('body').append('<div>User NOT logged in</div>');
        }
    });

    var database = firebase.database();
    var devos = firebase.database().ref('devos');

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

    devos.on('value', function(snapshot) {
        console.log(snapshot.val());
        devolist = snapshot.val();
        devokeys = Object.keys(devolist);
        navdevo(devolist, devokeys[currentdevo]);
    });

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
