```javascript
// Small interactions for the portfolio website

document.addEventListener("DOMContentLoaded", () => {

    // Add a subtle active state to navigation links
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    navLinks.forEach((link) => {
                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${entry.target.id}`
                        ) {
                            link.classList.add("active");
                        }
                    });

                }

            });
        },
        {
            threshold: 0.35
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

});
```
