/* =====================================================
   DETECTIVE CONAN WEBSITE
   script.js
===================================================== */


/* =====================================================
   CARD MOUSE LIGHT
===================================================== */

const cards =
    document.querySelectorAll(".case-card");


cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const xPercent =
            (x / rect.width) * 100;

        const yPercent =
            (y / rect.height) * 100;


        card.style.setProperty(
            "--mouse-x",
            `${xPercent}%`
        );

        card.style.setProperty(
            "--mouse-y",
            `${yPercent}%`
        );

    });


    card.addEventListener("mouseleave", () => {

        card.style.setProperty(
            "--mouse-x",
            "50%"
        );

        card.style.setProperty(
            "--mouse-y",
            "50%"
        );

    });


/* =====================================================
   CARD NAVIGATION
===================================================== */

    card.addEventListener("click", () => {

        const page =
            card.dataset.page;


        if (!page) {
            return;
        }


        window.location.href = page;

    });

});
