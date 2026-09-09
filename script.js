/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".navbar nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING
===================================================== */

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("active");
        }

    });

});


/* =====================================================
   HERO VIDEO SOUND BUTTON
===================================================== */

const video = document.querySelector(".hero-video");
const soundButton = document.getElementById("soundButton");

if (video && soundButton) {

    soundButton.addEventListener("click", async () => {

        try {

            // Turn sound on/off
            video.muted = !video.muted;

            if (video.muted) {

                // Sound OFF
                soundButton.textContent = "🔇";
                soundButton.setAttribute("aria-label", "Turn sound on");

            } else {

                // Sound ON
                soundButton.textContent = "🔊";
                soundButton.setAttribute("aria-label", "Turn sound off");

                // Make sure the video actually plays
                await video.play();

            }

        } catch (error) {

            console.error("Video playback error:", error);

            // If playback fails, keep the button in muted state
            video.muted = true;
            soundButton.textContent = "🔇";
            soundButton.setAttribute("aria-label", "Turn sound on");

        }

    });

}


/* =====================================================
   PLAY BUTTON
===================================================== */

const playButton = document.getElementById("playButton");
const missionPlay = document.getElementById("missionPlay");

function startGame() {

    /*
        Replace this later with the actual game page.

        Example:

        window.location.href = "game.html";
    */

    alert("The investigation is about to begin...\n\nGame page coming soon!");

}

if (playButton) {
    playButton.addEventListener("click", startGame);
}

if (missionPlay) {
    missionPlay.addEventListener("click", startGame);
}


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background = "rgba(10, 9, 7, 0.98)";

        } else {

            navbar.style.background = "rgba(14, 13, 11, 0.95)";

        }

    });

}