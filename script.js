```css
/* =========================================================
   VALERIA LENHARDT
   Personal Portfolio
========================================================= */


/* =========================================================
   VARIABLES
========================================================= */

:root {

    --black: #111311;
    --white: #ffffff;

    --green: #2e9b68;
    --green-dark: #21754e;
    --green-pale: #edf7f1;

    --gray: #707570;
    --gray-light: #a5aaa6;

    --border: #e4e7e4;
    --surface: #f7f8f7;

    --max-width: 1240px;

    --radius: 22px;
    --pill: 999px;

}


/* =========================================================
   RESET
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {

    background: var(--white);

    color: var(--black);

    font-family: "Inter", sans-serif;

    line-height: 1.5;

    overflow-x: hidden;

}


a {
    color: inherit;
    text-decoration: none;
}


button,
a {
    -webkit-tap-highlight-color: transparent;
}


/* =========================================================
   NAVIGATION
========================================================= */

.nav {

    width: min(
        var(--max-width),
        calc(100% - 64px)
    );

    height: 88px;

    margin: auto;

    display: grid;

    grid-template-columns: 1fr auto 1fr;

    align-items: center;

    position: relative;

    z-index: 10;

}


.nav-logo {

    width: 42px;
    height: 42px;

    border: 1px solid var(--black);

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 12px;

    font-weight: 700;

    letter-spacing: -0.5px;

    transition:
        background .2s ease,
        color .2s ease;

}


.nav-logo span {
    color: var(--green);
}


.nav-logo:hover {

    background: var(--black);

    color: white;

}


.nav-links {

    display: flex;

    gap: 34px;

}


.nav-links a {

    font-size: 13px;

    color: var(--gray);

    transition: color .2s ease;

}


.nav-links a:hover {
    color: var(--green);
}


.nav-contact {

    justify-self: end;

    display: flex;

    align-items: center;

    gap: 8px;

    font-size: 13px;

    font-weight: 600;

}


.nav-contact span {

    color: var(--green);

    font-size: 16px;

}


/* =========================================================
   HERO
========================================================= */

.hero {

    width: min(
        var(--max-width),
        calc(100% - 64px)
    );

    min-height: calc(100vh - 88px);

    margin: auto;

    display: flex;

    flex-direction: column;

    justify-content: space-between;

    padding-top: 60px;

    padding-bottom: 35px;

}


.hero-top {

    display: flex;

    justify-content: space-between;

    align-items: center;

    font-family: "DM Mono", monospace;

    font-size: 11px;

    color: var(--gray);

    text-transform: uppercase;

    letter-spacing: .05em;

}


.hero-location {

    display: flex;

    align-items: center;

    gap: 9px;

}


.green-dot {

    width: 7px;
    height: 7px;

    background: var(--green);

    border-radius: 50%;

    box-shadow:
        0 0 0 5px var(--green-pale);

}


.hero-main {

    display: grid;

    grid-template-columns: 1.5fr .7fr;

    gap: 80px;

    align-items: end;

    padding: 100px 0 70px;

}


.eyebrow {

    font-family: "DM Mono", monospace;

    font-size: 11px;

    text-transform: uppercase;

    color: var(--green);

    letter-spacing: .08em;

    margin-bottom: 24px;

}


.hero h1 {

    font-size: clamp(
        72px,
        10.5vw,
        154px
    );

    line-height: .83;

    letter-spacing: -.075em;

    font-weight: 600;

}


.hero h1 span {

    display: block;

    color: var(--green);

}


.hero-intro {

    padding-bottom: 8px;

}


.hero-intro > p {

    font-size: 17px;

    line-height: 1.65;

    color: var(--gray);

    max-width: 420px;

}


.hero-actions {

    display: flex;

    gap: 10px;

    margin-top: 30px;

}


.button {

    min-height: 48px;

    padding: 0 20px;

    border-radius: var(--pill);

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 12px;

    font-size: 13px;

    font-weight: 600;

    transition:
        transform .2s ease,
        background .2s ease,
        border-color .2s ease;

}


.button:hover {

    transform: translateY(-2px);

}


.button-dark {

    background: var(--black);

    color: white;

}


.button-dark:hover {

    background: var(--green);

}


.button-light {

    border: 1px solid var(--border);

}


.button-light:hover {

    border-color: var(--green);

    color: var(--green);

}


.hero-bottom {

    display: grid;

    grid-template-columns: 1fr auto 1fr;

    align-items: center;

    gap: 20px;

    color: var(--gray-light);

    font-family: "DM Mono", monospace;

    font-size: 10px;

    text-transform: uppercase;

    letter-spacing: .08em;

}


.scroll-line {

    width: 150px;

    height: 1px;

    background: var(--border);

    position: relative;

}


.scroll-line span {

    position: absolute;

    left: 0;

    top: -1px;

    width: 35%;

    height: 3px;

    background: var(--green);

}


.hero-symbol {

    justify-self: end;

    color: var(--green);

    font-size: 22px;

}


/* =========================================================
   SECTION
========================================================= */

.section {

    width: min(
        var(--max-width),
        calc(100% - 64px)
    );

    margin: auto;

    padding: 150px 0;

}


.section-heading {

    display: flex;

    align-items: center;

    gap: 18px;

    margin-bottom: 85px;

    font-family: "DM Mono", monospace;

    font-size: 11px;

    text-transform: uppercase;

    letter-spacing: .08em;

}


.section-number {

    color: var(--green);

}


.section-name {

    color: var(--gray);

}


.section-heading::after {

    content: "";

    height: 1px;

    width: 80px;

    background: var(--border);

}


/* =========================================================
   ABOUT
========================================================= */

.about {

    border-top: 1px solid var(--border);

}


.about-grid {

    display: grid;

    grid-template-columns: 1.2fr .8fr;

    gap: 120px;

}


.about-title h2 {

    max-width: 680px;

    font-size: clamp(
        45px,
        5.2vw,
        75px
    );

    line-height: .98;

    letter-spacing: -.055em;

    font-weight: 500;

}


.about-title em,
.projects-intro em,
.contact-title em {

    color: var(--green);

    font-style: normal;

}


.about-copy {

    max-width: 470px;

    color: var(--gray);

    font-size: 15px;

    line-height: 1.75;

}


.about-copy p + p {

    margin-top: 22px;

}


.about-copy .large-copy {

    font-size: 19px;

    line-height: 1.65;

    color: var(--black);

}


.about-details {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 100px;

    margin-top: 120px;

    padding-top: 30px;

    border-top: 1px solid var(--border);

}


.detail-block {

    display: grid;

    grid-template-columns: 130px 1fr;

    gap: 30px;

}


.detail-label {

    font-family: "DM Mono", monospace;

    font-size: 10px;

    text-transform: uppercase;

    letter-spacing: .08em;

    color: var(--gray-light);

}


.detail-content h3 {

    font-size: 18px;

    font-weight: 600;

}


.detail-content p {

    color: var(--gray);

    font-size: 14px;

    margin-top: 4px;

}


.detail-content span {

    display: block;

    margin-top: 10px;

    font-family: "DM Mono", monospace;

    font-size: 10px;

    color: var(--green);

}


.skill-list {

    display: flex;

    flex-wrap: wrap;

    gap: 7px;

}


.skill-list span {

    padding: 9px 13px;

    border: 1px solid var(--border);

    border-radius: var(--pill);

    font-size: 11px;

    transition:
        border-color .2s ease,
        background .2s ease;

}


.skill-list span:hover {

    border-color: var(--green);

    background: var(--green-pale);

}


/* =========================================================
   PROJECTS
========================================================= */

.projects {

    width: 100%;

    max-width: none;

    padding-left: max(
        32px,
        calc((100vw - var(--max-width)) / 2)
    );

    padding-right: max(
        32px,
        calc((100vw - var(--max-width)) / 2)
    );

    background: var(--surface);

}


.projects-intro {

    display: grid;

    grid-template-columns: 1fr .45fr;

    gap: 100px;

    align-items: end;

    margin-bottom: 80px;

}


.projects-intro h2 {

    font-size: clamp(
        48px,
        6vw,
        82px
    );

    line-height: .92;

    letter-spacing: -.06em;

    font-weight: 500;

}


.projects-intro p {

    color: var(--gray);

    font-size: 14px;

    line-height: 1.7;

    max-width: 330px;

}


.project-list {

    border-top: 1px solid var(--border);

}


.project {

    display: grid;

    grid-template-columns: 130px 1fr 80px;

    gap: 50px;

    padding: 42px 0;

    border-bottom: 1px solid var(--border);

    transition:
        padding-left .3s ease,
        background .3s ease;

}


.project:hover {

    padding-left: 15px;

}


.project-meta {

    display: flex;

    flex-direction: column;

    gap: 8px;

    font-family: "DM Mono", monospace;

    font-size: 10px;

    color: var(--gray-light);

}


.project-meta span:first-child {

    color: var(--green);

}


.project-body {

    max-width: 680px;

}


.project-type {

    font-family: "DM Mono", monospace;

    font-size: 10px;

    color: var(--green);

    text-transform: uppercase;

    letter-spacing: .07em;

    margin-bottom: 12px;

}


.project h3 {

    font-size: clamp(
        28px,
        3vw,
        42px
    );

    font-weight: 500;

    letter-spacing: -.04em;

}


.project-body > p {

    max-width: 550px;

    color: var(--gray);

    font-size: 14px;

    line-height: 1.7;

    margin-top: 12px;

}


.project-tags {

    display: flex;

    gap: 7px;

    margin-top: 20px;

}


.project-tags span {

    padding: 6px 10px;

    border-radius: var(--pill);

    background: var(--white);

    font-size: 10px;

    color: var(--gray);

}


.project-arrow {

    width: 48px;
    height: 48px;

    border: 1px solid var(--border);

    border-radius: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

    align-self: center;

    font-size: 18px;

    transition:
        background .2s ease,
        color .2s ease,
        transform .2s ease;

}


.project:hover .project-arrow {

    background: var(--green);

    color: white;

    border-color: var(--green);

    transform: rotate(45deg);

}


/* =========================================================
   CONTACT
========================================================= */

.contact {

    padding-top: 180px;

    padding-bottom: 180px;

}


.contact-main {

    display: grid;

    grid-template-columns: 1fr .75fr;

    gap: 130px;

}


.contact-small {

    display: block;

    margin-bottom: 20px;

    font-family: "DM Mono", monospace;

    font-size: 10px;

    text-transform: uppercase;

    color: var(--gray-light);

    letter-spacing: .08em;

}


.contact-title h2 {

    font-size: clamp(
        55px,
        7vw,
        100px
    );

    line-height: .88;

    letter-spacing: -.065em;

    font-weight: 500;

}


.contact-right {

    padding-top: 55px;

}


.contact-right > p {

    max-width: 390px;

    color: var(--gray);

    font-size: 15px;

    line-height: 1.7;

}


.email {

    display: inline-flex;

    align-items: center;

    gap: 15px;

    margin-top: 35px;

    padding-bottom: 8px;

    border-bottom: 1px solid var(--green);

    font-size: clamp(
        18px,
        2vw,
        27px
    );

    font-weight: 500;

}


.email span {

    color: var(--green);

}


.socials {

    display: flex;

    gap: 25px;

    margin-top: 50px;

}


.socials a {

    font-size: 12px;

    color: var(--gray);

    border-bottom: 1px solid transparent;

}


.socials a:hover {

    color: var(--green);

    border-color: var(--green);

}


/* =========================================================
   FOOTER
========================================================= */

footer {

    width: min(
        var(--max-width),
        calc(100% - 64px)
    );

    margin: auto;

    padding: 30px 0;

    border-top: 1px solid var(--border);

    display: flex;

    justify-content: space-between;

    align-items: center;

}


.footer-logo {

    font-size: 13px;

    font-weight: 600;

}


.footer-logo span {

    color: var(--green);

}


.footer-right {

    display: flex;

    gap: 30px;

    font-family: "DM Mono", monospace;

    font-size: 9px;

    color: var(--gray-light);

    text-transform: uppercase;

}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 900px) {

    .nav {

        width: calc(100% - 40px);

    }


    .nav-links {

        gap: 18px;

    }


    .nav-contact {

        display: none;

    }


    .hero,
    .section,
    footer {

        width: calc(100% - 40px);

    }


    .hero-main {

        grid-template-columns: 1fr;

        gap: 50px;

        padding-top: 90px;

    }


    .hero-intro {

        max-width: 520px;

    }


    .about-grid {

        grid-template-columns: 1fr;

        gap: 60px;

    }


    .about-details {

        grid-template-columns: 1fr;

        gap: 55px;

    }


    .projects {

        padding-left: 20px;

        padding-right: 20px;

    }


    .projects-intro {

        grid-template-columns: 1fr;

        gap: 30px;

    }


    .contact-main {

        grid-template-columns: 1fr;

        gap: 30px;

    }


    .contact-right {

        padding-top: 0;

    }

}


@media (max-width: 600px) {

    .nav {

        height: 72px;

    }


    .nav-links a {

        font-size: 11px;

    }


    .nav-links {

        gap: 14px;

    }


    .hero {

        width: calc(100% - 32px);

        min-height: 760px;

        padding-top: 45px;

    }


    .hero-main {

        padding: 80px 0 50px;

    }


    .hero h1 {

        font-size: 19vw;

        letter-spacing: -.075em;

    }


    .hero-intro > p {

        font-size: 15px;

    }


    .hero-actions {

        flex-wrap: wrap;

    }


    .hero-bottom {

        grid-template-columns: 1fr auto;

    }


    .hero-bottom .scroll-line {

        display: none;

    }


    .section {

        width: calc(100% - 32px);

        padding: 100px 0;

    }


    .section-heading {

        margin-bottom: 55px;

    }


    .about-title h2 {

        font-size: 43px;

    }


    .about-copy .large-copy {

        font-size: 17px;

    }


    .about-details {

        margin-top: 80px;

    }


    .detail-block {

        grid-template-columns: 1fr;

        gap: 18px;

    }


    .projects {

        padding: 100px 16px;

    }


    .projects-intro h2 {

        font-size: 50px;

    }


    .project {

        grid-template-columns: 45px 1fr;

        gap: 15px;

        padding: 32px 0;

    }


    .project-arrow {

        grid-column: 2;

        grid-row: 1;

        justify-self: end;

    }


    .project-body {

        grid-column: 2;

    }


    .project-meta {

        grid-column: 1;

        grid-row: 1;

    }


    .contact {

        padding-top: 110px;

        padding-bottom: 110px;

    }


    .contact-title h2 {

        font-size: 56px;

    }


    .email {

        font-size: 18px;

    }


    footer {

        width: calc(100% - 32px);

        flex-direction: column;

        align-items: flex-start;

        gap: 15px;

    }


    .footer-right {

        flex-direction: column;

        gap: 5px;

    }

}


/* =========================================================
   ACCESSIBILITY
========================================================= */

@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }

    * {
        transition: none !important;
    }

}
```
