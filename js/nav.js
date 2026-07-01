document.addEventListener("DOMContentLoaded", function () {

    const nav = document.querySelector("nav");

    if (nav) {
        nav.innerHTML = `
            <a href="/">Home</a>

            <div class="dropdown">
                <a href="/archive/">Archive</a>

                <div class="dropdown-content">

                    <div class="submenu">
                        <span class="submenu-title">photographs</span>

                        <div class="submenu-content">
                            <a href="/archive/">all photographs</a>
                            <a href="/archive/people/">people</a>
                            <a href="/archive/places/">places</a>
                            <a href="/archive/animals/">animals</a>
                            <a href="/archive/interiors/">interiors</a>
                            <a href="/archive/objects/">objects</a>
                        </div>
                    </div>

                    <div class="submenu">
                        <span class="submenu-title">printed matter</span>

                        <div class="submenu-content">
                            <a href="/archive/paper/">all printed matter</a>
                            <a href="/archive/paper/postcards/">postcards</a>
                            <a href="/archive/paper/advertisements/">advertisements</a>
                            <a href="/archive/paper/matchbooks/">matchbooks</a>
                        </div>
                    </div>

                </div>
            </div>

            <a href="/about/">About</a>
            <a href="/contact/">Contact</a>
        `;
    }

    const dropdown = document.querySelector(".dropdown");
    const archiveLink = document.querySelector(".dropdown > a");
    const submenuTitles = document.querySelectorAll(".submenu-title");

    if (archiveLink && dropdown) {
        archiveLink.addEventListener("click", function (e) {
            if (window.innerWidth <= 700) {
                e.preventDefault();
                dropdown.classList.toggle("mobile-open");

                if (!dropdown.classList.contains("mobile-open")) {
                    document.querySelectorAll(".submenu").forEach(function (submenu) {
                        submenu.classList.remove("mobile-open");
                    });
                }
            }
        });
    }

    submenuTitles.forEach(function (title) {
        title.addEventListener("click", function () {
            if (window.innerWidth <= 700) {
                const currentSubmenu = title.parentElement;
                const isOpen = currentSubmenu.classList.contains("mobile-open");

                document.querySelectorAll(".submenu").forEach(function (submenu) {
                    submenu.classList.remove("mobile-open");
                });

                if (!isOpen) {
                    currentSubmenu.classList.add("mobile-open");
                }
            }
        });
    });

    const button = document.createElement("button");
    button.id = "back-to-top";
    button.textContent = "back to top";

    document.body.appendChild(button);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 900) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });

    button.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
