// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB_cZ0r4c5wKQxPriRfra0__nA1_TEFW-M",
    authDomain: "ar-hub-6c9e7.firebaseapp.com",
    databaseURL: "https://ar-hub-6c9e7.firebaseio.com",
    projectId: "ar-hub-6c9e7",
    storageBucket: "ar-hub-6c9e7.appspot.com",
    messagingSenderId: "652513003516",
    appId: "1:652513003516:web:aed8b4063f4e8dbd6a5479"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//event listener
document.getElementById('signup').addEventListener('submit', submitSignUp)
document.getElementById('signin').addEventListener('submit', submitSignIn)
document.getElementById('google').addEventListener('click', googleSignIn)
function submitSignIn(e) {
    e.preventDefault();

    var email = getInputVal('email');
    var password = getInputVal('password');
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise
    .then(user => console.log(user))
    .catch(e=> console.log(e.message));
}

googleSignIn = () => {
  base_provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth.signInWithPopup(base_provider)
  .then(function(result){
    console.log(result)
    console.log("Success Google Account Linked")
  }).catch(function(error){
    console.log(err)
    console.log("Failed authentication")
  })
}


function submitSignUp(e) {
    e.preventDefault();

    var email = getInputVal('email');
    var password = getInputVal('password');
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e=> console.log(e.message));
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

//funciones de validacion de contrasena
var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
