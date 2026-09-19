```javascript
/* =========================================================
   VALERIA LENHARDT
   Portfolio interactions
========================================================= */


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    setupScrollAnimations();
    setupNavigation();

});


/* =========================================================
   SCROLL ANIMATIONS
========================================================= */

function setupScrollAnimations() {

    const elements = document.querySelectorAll(
        ".about-grid, " +
        ".about-details, " +
        ".projects-intro, " +
        ".project, " +
        ".contact-main"
    );


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    elements.forEach((element) => {

        element.classList.add("animate");

        observer.observe(element);

    });

}


/* =========================================================
   NAVIGATION
========================================================= */

function setupNavigation() {

    const navLinks =
        document.querySelectorAll(".nav-links a");

    const sections =
        document.querySelectorAll("section[id]");


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }


                navLinks.forEach((link) => {

                    link.classList.remove("active");


                    if (
                        link.getAttribute("href") ===
                        "#" + entry.target.id
                    ) {

                        link.classList.add("active");

                    }

                });

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );


    sections.forEach((section) => {

        observer.observe(section);

    });

}


/* =========================================================
   ADD ACTIVE NAV STYLE DYNAMICALLY
========================================================= */

const style = document.createElement("style");

style.textContent = `

    .nav-links a {
        position: relative;
    }

    .nav-links a::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -6px;
        width: 0;
        height: 1px;
        background: #2e9b68;
        transition: width .2s ease;
    }

    .nav-links a.active {
        color: #111311;
    }

    .nav-links a.active::after {
        width: 100%;
    }


    .animate {
        opacity: 0;
        transform: translateY(25px);
        transition:
            opacity .7s ease,
            transform .7s ease;
    }

    .animate.visible {
        opacity: 1;
        transform: translateY(0);
    }


    .project:nth-child(2) {
        transition-delay: .08s;
    }

    .project:nth-child(3) {
        transition-delay: .16s;
    }

`;

document.head.appendChild(style);
```
