document.querySelector('#sign-in').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    if(errorCode == "auth/invalid-email"){
        document.getElementById("demo").innerHTML = "Invalid email please try again.";
    };
    if (errorCode == "auth/wrong-password") {
        document.getElementById("demo").innerHTML = "Invalid password please try again.";
    };
    if (errorCode == "auth/user-not-found") {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(e) {
            if (e != null)
            {
                console.log(e);
            };
        });
        document.getElementById("demo").innerHTML = "Created user with email " + firebase.auth().currentUser['email'];    

    var errorMessage = error.message;    
};
    
    var user = firebase.auth().currentUser;
    if(user != null){
        document.getElementById("demo").innerHTML = "Succerfully logged in as " + firebase.auth().currentUser['email'];
    }
    });
});
    
document.querySelector('#sign-out').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    firebase.auth().signOut();
});