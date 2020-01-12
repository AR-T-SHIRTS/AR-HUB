var ref = new Firebase("https://ar-hub-6c9e7.firebaseapp.com/");

var user = {
    email: "malvarez@desarrolloweb.com",
    password: "1234"
};

ref.authWithPassword(user);

ref.createUser(user, function (error) {
    if (error) {
        console.log(error.code);
    } else {
        console.log("Tu usuario se ha registrado");
    }
});