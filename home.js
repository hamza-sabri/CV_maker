const signInList = document.getElementById('signing-list');
var uiConfig;
var ui = null;
var eye;
//firebase configrations
uiConfig = {
    signInSuccessUrl: 'cv_maker.html',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    tosUrl: 'https://www.youtube.com/watch?v=hb85pYZSJaI',
    privacyPolicyUrl: function () {
        window.location.assign('cv_maker.html');
    }
};


function signup() {
    var email;
    var password;
    Swal.fire({
        html: "<h4 style='text-align: start;padding-top: 0;margin-top: 0;margin-bottom: 10px'>sign up</h4>" +
            "<div class=\"input-field col s6\">\n" +
            "          <input id=\"sigIn_email\" type=\"email\" class=\"validate\" style='padding-left: 10px; max-width: 95%' autocomplete='on' >\n" +
            "          <label for=\"sigIn_email\">email</label>\n" +
            "        </div>\n" +
            "        <div class=\"input-field col s6\">\n" +
            "          <input id=\"sigIn_password\" type=\"password\" class=\"validate\" style='padding-left: 10px; max-width: 95%'>\n" +
            "          <label for=\"sigIn_password\" style='width: 90%'>password</label>" +
            "<img src='imgs/unlooking.png' style='width: 25px;height: 15px; float: right;margin-top: -38px;margin-right: -10px' class='eye'>\n" +
            "        </div>",
    }).then(function (value) {
        email = document.getElementById('sigIn_email');
        password = document.getElementById('sigIn_password');
    });
    eye = document.querySelector('.eye');
    eye.addEventListener('click', changeEye);
    console.log(eye);
    //-----------------------------------------------------------------
    const bottomDiv = document.querySelector('.swal2-actions');
    const c = bottomDiv.children;
    c[0].innerText = 'sign up';
    c[0].addEventListener('click', function () {
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then(function (cred) {
                console.log(cred);
                console.log('id = ' + cred.user.uid);
                swal({
                    title: 'signed up',
                    icon: "success",
                });
                const okDiv = document.querySelector('.swal-button-container');
                const children = okDiv.children;
                const mychild = children[0];
                mychild.addEventListener('click', function () {
                    //send me to the next page
                    window.open('cv_maker.html', "_self");
                });
            }).catch(function (error) {
            const errorMessage = error.message;
            swal({
                title: 'sorry something went wrong',
                icon: "error",
                text: errorMessage,
            });
        });
    });
}


function logIn() {
    var email;
    var password;

    Swal.fire({
        html: "<h4 style='text-align: start;'>Log in</h4>" +
            "<div class=\"input-field col s6\">\n" +
            "          <input id=\"sigIn_email\" type=\"email\" class=\"validate\" style='padding-left: 10px; max-width: 95%' autocomplete='on'>\n" +
            "          <label for=\"sigIn_email\">email</label>\n" +
            "        </div>\n" +
            "        <div class=\"input-field col s6\">\n" +
            "          <input id=\"sigIn_password\" type=\"password\" class=\"validate\" style='padding-left: 10px; max-width: 95%'>\n" +
            "          <label for=\"sigIn_password\" style='width: 90%'>password</label>" +
            "<img src='imgs/unlooking.png' style='width: 25px;height: 15px; float: right;margin-top: -38px;margin-right: -10px' class='eye'>\n" +
            "        </div>",
    }).then(function (value) {
        email = document.getElementById('sigIn_email');
        password = document.getElementById('sigIn_password');
    });
    eye = document.querySelector('.eye');
    eye.addEventListener('click', changeEye);
    //removing the bottom div you can create something else later on
    const bottomDiv = document.querySelector('.swal2-actions');
    const c = bottomDiv.children;
    c[1].remove();
    c[0].innerText = 'Log in';
    c[0].addEventListener('click', function () {
        firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(function () {
            swal({
                title: 'Loged in',
                icon: "success",
                text: 'welcome to our great community'
            });
            const okDiv = document.querySelector('.swal-button-container');
            const children = okDiv.children;
            const mychild = children[0];
            mychild.addEventListener('click', function () {
                //send me to the next page
                window.open('cv_maker.html', "_self");
            });
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
            swal({
                title: 'sorry something went wrong',
                icon: "error",
                text: errorMessage,
            });
        });
    });
}


function changeEye() {
    let pass = document.getElementById('sigIn_password');
    if (pass != null && pass != undefined) {
        if (pass.type == 'password') {
            pass.type = 'text';
            eye.src = 'imgs/looking.png';
            eye.style.width = '28px';
            eye.style.height = '25px';
        } else {
            pass.type = 'password';
            eye.src = 'imgs/unlooking.png';
            eye.style.width = '25px';
            eye.style.height = '15px';
        }
    }
}


function firebaseSignInMethods() {
    Swal.fire({
        html: "<div class=\"firebaseui-auth-container\"></div>",
    }).then(function (value) {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
            } else {
                console.log('no user is in');
            }
        })
    });
    //removing the bottom div you can create something else later on
    const bottomDiv = document.querySelector('.swal2-actions');

    bottomDiv.remove();
    if (ui == null) {
        ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start('.firebaseui-auth-container', uiConfig);
}