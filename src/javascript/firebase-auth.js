
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
document.getElementById('signup').addEventListener('click', submitSignUp)
document.getElementById('signin').addEventListener('click', submitSignIn)


const signInResult = false

function submitSignIn(e) {
    e.preventDefault();

    var email = getInputVal('emails');
    var password = getInputVal('passwords');
    

    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(function (e){
        result = e.message

        return 0;
    });

    const user = firebase.auth().currentUser;
    user.
    if(user.emailVerified){

        document.getElementById("start").classList.remove('d-none')
        document.getElementById("start").classList.add('d-block')
    
    } 
    //else {
    //    document.location.reload(true)
    //    
    //}
}




function submitSignUp(e) {
    e.preventDefault();

    var email = getInputVal('email');
    var password = getInputVal('password');
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));

    const user = firebase.auth().currentUser;
    console.log(user)
}



function getInputVal(id) {
    return document.getElementById(id).value;
}

//funciones de validacion de contrasena
const password = document.getElementById("password")
    , confirm_password = document.getElementById("confirm_password");

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}


password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
