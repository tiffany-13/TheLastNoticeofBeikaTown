// =====================================================
// GET HTML ELEMENTS
// =====================================================

const loginForm =
    document.getElementById("loginForm");

const signupForm =
    document.getElementById("signupForm");

const authSwitch =
    document.getElementById("authSwitch");

const authTitle =
    document.getElementById("authTitle");

const loginMessage =
    document.getElementById("loginMessage");

const signupMessage =
    document.getElementById("signupMessage");



// =====================================================
// CHECK URL MODE
// =====================================================

const params =
    new URLSearchParams(window.location.search);

const mode =
    params.get("mode");



// =====================================================
// SHOW LOGIN OR SIGN UP
// =====================================================

if (mode === "signup") {

    // Show SIGN UP

    authTitle.textContent =
        "SIGN UP";

    loginForm.style.display =
        "none";

    signupForm.style.display =
        "flex";

    authSwitch.textContent =
        "ALREADY HAVE AN ACCOUNT? LOGIN";

}

else {

    // Show LOGIN

    authTitle.textContent =
        "LOGIN";

    loginForm.style.display =
        "flex";

    signupForm.style.display =
        "none";

    authSwitch.textContent =
        "CREATE AN ACCOUNT";

}



// =====================================================
// CHECK IF ALREADY LOGGED IN
// =====================================================

if (localStorage.getItem("loggedInUser")) {

    window.location.href =
        "../index.html";

}



// =====================================================
// SWITCH LOGIN / SIGN UP
// =====================================================

authSwitch.addEventListener("click", function () {

    // Currently showing LOGIN

    if (loginForm.style.display !== "none") {

        authTitle.textContent =
            "SIGN UP";

        loginForm.style.display =
            "none";

        signupForm.style.display =
            "flex";

        authSwitch.textContent =
            "ALREADY HAVE AN ACCOUNT? LOGIN";

        // Clear old messages

        loginMessage.textContent =
            "";

        signupMessage.textContent =
            "";

    }

    // Currently showing SIGN UP

    else {

        authTitle.textContent =
            "LOGIN";

        loginForm.style.display =
            "flex";

        signupForm.style.display =
            "none";

        authSwitch.textContent =
            "CREATE AN ACCOUNT";

        // Clear old messages

        loginMessage.textContent =
            "";

        signupMessage.textContent =
            "";

    }

});



// =====================================================
// SIGN UP
// =====================================================

signupForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get input values

    const username =
        document.getElementById("signupUsername")
            .value.trim();

    const password =
        document.getElementById("signupPassword")
            .value;

    const confirmPassword =
        document.getElementById("signupConfirmPassword")
            .value;


    // Clear previous message

    signupMessage.textContent =
        "";



    // =================================================
    // GET EXISTING USERS
    // =================================================

    const users =
        JSON.parse(
            localStorage.getItem("users")
        ) || [];



    // =================================================
    // CHECK DUPLICATE USERNAME
    // =================================================

    const existingUser =
        users.find(
            user =>
                user.username.toLowerCase() ===
                username.toLowerCase()
        );


    if (existingUser) {

        signupMessage.textContent =
            "USERNAME ALREADY EXISTS.";

        return;

    }



    // =================================================
    // CHECK PASSWORD LENGTH
    // =================================================

    if (password.length < 6) {

        signupMessage.textContent =
            "PASSWORD MUST BE AT LEAST 6 CHARACTERS.";

        return;

    }



    // =================================================
    // CHECK PASSWORD MATCH
    // =================================================

    if (password !== confirmPassword) {

        signupMessage.textContent =
            "PASSWORDS DO NOT MATCH.";

        return;

    }



    // =================================================
    // CREATE NEW USER
    // =================================================

    const newUser = {

        username: username,

        password: password

    };


    users.push(newUser);



    // =================================================
    // SAVE USERS
    // =================================================

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );



    // =================================================
    // AUTOMATICALLY LOG USER IN
    // =================================================

    localStorage.setItem(
        "loggedInUser",
        username
    );



    // =================================================
    // SUCCESS MESSAGE
    // =================================================

    signupMessage.textContent =
        "ACCOUNT CREATED. WELCOME, DETECTIVE.";


    signupForm.reset();



    // =================================================
    // RETURN TO HOMEPAGE
    // =================================================

    setTimeout(function () {

        window.location.href =
            "../index.html";

    }, 1000);

});



// =====================================================
// LOGIN
// =====================================================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get input values

    const username =
        document.getElementById("loginUsername")
            .value.trim();

    const password =
        document.getElementById("loginPassword")
            .value;


    // Clear previous message

    loginMessage.textContent =
        "";



    // =================================================
    // GET EXISTING USERS
    // =================================================

    const users =
        JSON.parse(
            localStorage.getItem("users")
        ) || [];



    // =================================================
    // FIND MATCHING USER
    // =================================================

    const user =
        users.find(
            user =>
                user.username.toLowerCase() ===
                username.toLowerCase() &&
                user.password === password
        );



    // =================================================
    // INVALID LOGIN
    // =================================================

    if (!user) {

        loginMessage.textContent =
            "INVALID USERNAME OR PASSWORD.";

        return;

    }



    // =================================================
    // SAVE LOGGED-IN USER
    // =================================================

    localStorage.setItem(
        "loggedInUser",
        user.username
    );



    // =================================================
    // SUCCESS MESSAGE
    // =================================================

    loginMessage.textContent =
        "LOGIN SUCCESSFUL. WELCOME BACK, DETECTIVE.";


    loginForm.reset();
    
setTimeout(function () {

    window.location.href =
        "../index.html";

}, 1000);

  

});
