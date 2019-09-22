
document.querySelector('#sign-google').addEventListener('click', function(e) {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        console.log(provider);
        firebase.auth().signInWithPopup(provider)
        //.then(function(result) {
        //   console.log(result);
        //   var acesssToken = result.credential.accessToken;
        //   var user = result.user;
        //   document.getElementById('quickstart-oauthtoken').textContent = token;
        // }).catch(function(error) {
        //   var errorCode = error.code;
        //   var errorMessage = error.message;
        //   var email = error.email;
        //   var credential = error.credential;
        //   if (errorCode === 'auth/account-exists-with-different-credential') {
        //     document.getElementById("demo").innerHTML = ("You have already signed up with a different auth provider for that email.");
        //   } else {
        //     console.error(errorCode);
        //   }
        // });
});

