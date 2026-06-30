document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");

    nav.innerHTML = `
        <a href="/">Home</a>

        <div class="dropdown">
            <a href="/archive/">Archive</a>

            <div class="dropdown-content">

                <div class="menu-label">Photographs</div>

                <a href="/archive/">All Photographs</a>
                <a href="/archive/people/">People</a>
                <a href="/archive/places/">Places</a>
                <a href="/archive/animals/">Animals</a>
                <a href="/archive/interiors/">Interiors</a>
                <a href="/archive/objects/">Objects</a>

            </div>
        </div>

        <a href="/about/">About</a>
        <a href="/contact/">Contact</a>
    `;
});
