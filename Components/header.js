const currentPath = window.location.pathname;

// Get the directory containing the current HTML file
const currentDirectory = currentPath.substring(
    0,
    currentPath.lastIndexOf("/") + 1
);

// Find the project root
const projectName = "TheLastNoticeofBeikaTown_NarrativeGame";
const projectIndex = currentDirectory.indexOf(projectName);

let root = "";

if (projectIndex !== -1) {

    const relativePath = currentDirectory.substring(
        projectIndex + projectName.length
    );

    const depth = relativePath
        .split("/")
        .filter(folder => folder.length > 0)
        .length;

    root = "../".repeat(depth);
}

console.log("Current directory:", currentDirectory);
console.log("Root:", root);

const header = document.getElementById("header");

header.innerHTML = `
    <header class="navbar">

    <div class="logo-container">
        <a href="${root}../index.html" class="logo">
            <img src="${root}../assets/Home/logo.jpg" alt="Game Logo">
        </a>
    </div>

    <nav>
        <a href="${root}../index.html">Home</a>
        <a href="${root}../DevProfile/AboutUs.html">About</a>

        <button class="login-btn" id="loginButton">
            <span>LOG IN</span>

            <i class="left"></i>
            <i class="right"></i>
        </button>

        <button class="login-btn" id="signupButton">
            <span>SIGN UP</span>

            <i class="left"></i>
            <i class="right"></i>
        </button>
    </nav>

</header>
`;

const headerScript = document.currentScript;

const componentsPath = new URL(".", headerScript.src);

const css = document.createElement("link");

css.rel = "stylesheet";
css.href = new URL("header.css", componentsPath).href;

document.head.appendChild(css);

// =====================================================
// LOGIN / SIGN UP BUTTONS
// =====================================================

const loginButton =
    document.getElementById("loginButton");

const signupButton =
    document.getElementById("signupButton");



// =====================================================
// LOGOUT MODAL
// =====================================================

const logoutModal =
    document.createElement("div");

logoutModal.className =
    "logout-modal";


logoutModal.innerHTML = `

    <div class="logout-box">

        <span class="logout-label">
            DETECTIVE DATABASE
        </span>

        <h2>
            LOGGED OUT
        </h2>

        <div class="logout-line"></div>

        <p>
            YOU HAVE BEEN SUCCESSFULLY LOGGED OUT.
        </p>

        <button id="logoutClose">
            CLOSE
        </button>

    </div>

`;


document.body.appendChild(logoutModal);



const logoutClose =
    document.getElementById("logoutClose");



// =====================================================
// LOGIN / LOGOUT BUTTON
// =====================================================

loginButton.addEventListener("click", function () {

    const loggedInUser =
        localStorage.getItem("loggedInUser");


    // =================================================
    // IF LOGGED IN → LOG OUT
    // =================================================

    if (loggedInUser) {

        localStorage.removeItem(
            "loggedInUser"
        );


        updateLoginButtons();


        logoutModal.classList.add(
            "show"
        );


        return;

    }


    // =================================================
    // IF LOGGED OUT → OPEN LOGIN PAGE
    // =================================================

    window.location.href = "../Auth/auth.html?mode=login";

});



// =====================================================
// SIGN UP BUTTON
// =====================================================

signupButton.addEventListener("click", function () {

    // Open SIGN UP page

    window.location.href = "../Auth/auth.html?mode=signup";

});



// =====================================================
// CLOSE LOGOUT MODAL
// =====================================================

logoutClose.addEventListener("click", function () {

    logoutModal.classList.remove(
        "show"
    );


    updateLoginButtons();

});



// =====================================================
// UPDATE LOGIN / SIGN UP BUTTONS
// =====================================================

function updateLoginButtons() {

    const loggedInUser =
        localStorage.getItem("loggedInUser");


    // =================================================
    // USER IS LOGGED IN
    // =================================================

    if (loggedInUser) {

        loginButton.innerHTML =
            "<span>LOGOUT</span>";


        signupButton.style.display =
            "none";

    }


    // =================================================
    // USER IS LOGGED OUT
    // =================================================

    else {

        loginButton.textContent =
            "LOGIN";


        signupButton.style.display =
            "block";

    }

}



// =====================================================
// CHECK LOGIN STATUS WHEN HOMEPAGE LOADS
// =====================================================

updateLoginButtons();


setTimeout(function () {

    document.querySelectorAll(".login-btn").forEach(function (button) {
        button.classList.add("ready");
    });

}, 150);
