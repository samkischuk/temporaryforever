document.addEventListener("DOMContentLoaded", function () {
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
                    <a href="/archive/paper/" class="submenu-title">on paper</a>

                    <div class="submenu-content">
                        <a href="/archive/paper/">all paper</a>
                    </div>
                </div>

            </div>
        </div>

        <a href="/about/">About</a>
        <a href="/contact/">Contact</a>
    `;
});
