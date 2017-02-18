$(document).ready(function(){
    var database = firebase.database();

    function writeUserData(userId, first, last, age) {
      firebase.database().ref('users/' + userId).set({
        firstname: first,
        lastname: last,
        age: age
      });
    }

    // Below sets a listener on the user list and returns it if changed

    var users = firebase.database().ref('users');
    users.on('value', function(snapshot) {
        console.log(snapshot.val());
    });

    // Below writes to user list on click... runs the snapshot above on change

    $(document).on('click', function(){
        console.log('click');
        writeUserData(5,'Frank','Shafer',30);
    });


});
