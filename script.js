```javascript
/* =========================================================
   VALERIA LENHARDT — WEBSITE SCRIPT
   ========================================================= */


/* ---------- SCROLL REVEAL ---------- */

const revealElements = document.querySelectorAll(
    ".section, .project, .about-grid, .contact-content"
);

revealElements.forEach((element) => {
    element.classList.add("fade-in");
});


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


revealElements.forEach((element) => {
    observer.observe(element);
});


/* ---------- NAVIGATION ---------- */

const navLinks = document.querySelectorAll(".navbar nav a");

const sections = document.querySelectorAll(
    "#about, #projects, #contact"
);


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


/* ---------- SMOOTH ANCHOR SCROLL ---------- */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* ---------- ACTIVE NAV STYLE ---------- */

const style = document.createElement("style");

style.textContent = `
    .navbar nav a.active {
        color: #22a861;
    }
`;

document.head.appendChild(style);
```
