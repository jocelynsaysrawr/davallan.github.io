$(document).ready(function(){

    var currentdevo = 0;
    var devolist;
    var devokeys = [];
    var database;

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

    function triggerSignin(provider) {

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // console.log(token);
            // The signed-in user info.
            var user = result.user;
            // console.log(user);
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

    function triggerSignOut() {
        firebase.auth().signOut().then(function() {
          window.location = '/devo/login';
        }, function(error) {
          alert('there was a problem logging out');
        });
    }

    $('.google-login').click(function(){
        var googleSignIn = new firebase.auth.GoogleAuthProvider();
        triggerSignin(googleSignIn);
    });

    $('.facebook-login').click(function(){
        var facebookSignIn = new firebase.auth.FacebookAuthProvider();
        triggerSignin(facebookSignIn);
    });

    $('.sign-out').click(function(){
        triggerSignOut();
    });


// Login Check

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            database = firebase.database();
            var devos = database.ref('devos');
            devos.on('value', function(snapshot) {
              devolist = snapshot.val();
            });

            $('.welcome img').attr('src', user.photoURL);
            $('.welcome .message').html('Welcome, ' + user.displayName);
            $('.welcome').show();
            $('.login-actions').hide();
            $('.sign-out').show();
            appendPosts('posts-wrapper');
            console.log(user);
        } else {
            $('.login-actions').show();
            $('.welcome').hide();
        }
    });


    function newDevo(devoId, title, body, author, date) {
      database.ref('devos/' + devoId).set({
        title: title,
        body: body,
        author: author,
        date: date
      });
    }

    function appendPosts(elementClass){

        console.log('append Posts called');
        console.log(devolist);
        $.each(devolist, function(){
            console.log('hello');
            $('.'+ elementClass).append('<div>heres one</div>');
        });
    }

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

});
