document.addEventListener("DOMContentLoaded", function () {

    // Navigation
    const nav = document.querySelector("nav");

    nav.innerHTML = `
        <a href="/">Home</a>

        <div class="dropdown">
            <a href="/archive/">Archive</a>

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

    // ------------------------------------
    // Back to Top Button
    // ------------------------------------

    const button = document.createElement("button");
    button.id = "back-to-top";
    button.textContent = "back to top";

    document.body.appendChild(button);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});
