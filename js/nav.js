document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");

    nav.innerHTML = `
        <a href="/">Home</a>

        <div class="dropdown">
            <a href="/archive/">Archive</a>

            <div class="dropdown-content">

                <div class="menu-label">photographs</div>

<a href="/archive/">all photographs</a>
<a href="/archive/people/">people</a>
<a href="/archive/places/">places</a>
<a href="/archive/animals/">animals</a>
<a href="/archive/interiors/">interiors</a>
<a href="/archive/objects/">objects</a>

            </div>
        </div>

        <a href="/about/">About</a>
        <a href="/contact/">Contact</a>
    `;
});
