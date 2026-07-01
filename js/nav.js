document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");

    nav.innerHTML = `
        <a href="/">Home</a>

        <div class="dropdown">
            <a href="/archive/" class="dropdown-title">Archive</a>

            <div class="dropdown-content">

                <div class="submenu">
                    <a href="/archive/" class="submenu-title">photographs</a>

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
                    <a href="/archive/paper/" class="submenu-title">printed matter</a>

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

    const archiveTitle = document.querySelector(".dropdown-title");
    const dropdown = document.querySelector(".dropdown");
    const submenuTitles = document.querySelectorAll(".submenu-title");

    archiveTitle.addEventListener("click", function (e) {
        if (window.innerWidth <= 700) {
            e.preventDefault();
            dropdown.classList.toggle("open");
        }
    });

    submenuTitles.forEach(function (title) {
        title.addEventListener("click", function (e) {
            if (window.innerWidth <= 700) {
                e.preventDefault();
                title.parentElement.classList.toggle("open");
            }
        });
    });
});
