let currentImageIndex = 0;
let showingBack = false;

const gallery = document.getElementById("paper-gallery");
const path = window.location.pathname.toLowerCase();

let displayedItems = [...paperItems];

const isPostcardsPage = path.includes("postcards");
const isAdvertisementsPage = path.includes("advertisements");
const isMatchbooksPage = path.includes("matchbooks");

if (isPostcardsPage) {
    displayedItems = paperItems.filter(item => item.category === "postcards");
} else if (isAdvertisementsPage) {
    displayedItems = paperItems.filter(item => item.category === "advertisements");
} else if (isMatchbooksPage) {
    displayedItems = paperItems.filter(item => item.category === "matchbooks");
}

displayedItems.reverse();

const isAllPaperPage =
    path.includes("/archive/paper/") &&
    !isPostcardsPage &&
    !isAdvertisementsPage &&
    !isMatchbooksPage;

if (isAllPaperPage) {
    buildGroupedPaperArchive();
} else {
    displayedItems.forEach((item, index) => {
        gallery.appendChild(createPaperImage(item, index));
    });
}

function buildGroupedPaperArchive() {
    gallery.classList.add("grouped-paper-gallery");

    const groups = [
        { title: "postcards", category: "postcards" },
        { title: "matchbooks", category: "matchbooks" },
        { title: "advertisements", category: "advertisements" }
    ];

    groups.forEach(group => {
        const items = displayedItems.filter(item => item.category === group.category);

        if (items.length === 0) return;

        const section = document.createElement("section");
        section.className = "paper-group";

        const heading = document.createElement("h3");
        heading.className = "paper-group-title";
        heading.textContent = group.title;

        const grid = document.createElement("div");
        grid.className = "paper-group-grid";

        if (group.category === "matchbooks") {
            grid.classList.add("paper-group-matchbooks");
        }

        items.forEach(item => {
            const realIndex = displayedItems.indexOf(item);
            grid.appendChild(createPaperImage(item, realIndex));
        });

        section.appendChild(heading);
        section.appendChild(grid);
        gallery.appendChild(section);
    });
}

function createPaperImage(item, index) {
    const img = document.createElement("img");

    img.src = item.src;
    img.alt = item.title;
    img.className = "paper-thumbnail";

    if (item.category === "postcards") {
        img.classList.add("postcard-thumbnail");
    }

    if (item.category === "matchbooks") {
        img.classList.add("matchbook-thumbnail");
    }

    let flipped = false;

    if (item.hoverSrc) {
        img.addEventListener("mouseenter", () => {
            if (!isMobile()) {
                img.src = item.hoverSrc;

                if (item.category === "postcards") {
                    img.classList.add("postcard-back");
                }
            }
        });

        img.addEventListener("mouseleave", () => {
            if (!isMobile()) {
                img.src = item.src;
                img.classList.remove("postcard-back");
            }
        });
    }

    img.addEventListener("click", () => {
        if (isMobile() && item.hoverSrc && !flipped) {
            img.src = item.hoverSrc;
            flipped = true;

            if (item.category === "postcards") {
                img.classList.add("postcard-back");
            }

            return;
        }

        img.src = item.src;
        img.classList.remove("postcard-back");
        flipped = false;
        openLightbox(index);
    });

    return img;
}

function isMobile() {
    return window.matchMedia("(max-width: 700px)").matches;
}

function openLightbox(index) {
    currentImageIndex = index;
    showingBack = false;

    const item = displayedItems[currentImageIndex];
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = item.src;
    lightboxImg.classList.remove("postcard-back");

    document.getElementById("lightbox").style.display = "flex";

    updateFlipText();
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function previousImage(event) {
    event.stopPropagation();

    currentImageIndex =
        (currentImageIndex - 1 + displayedItems.length) % displayedItems.length;

    showingBack = false;

    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = displayedItems[currentImageIndex].src;
    lightboxImg.classList.remove("postcard-back");

    updateFlipText();
}

function nextImage(event) {
    event.stopPropagation();

    currentImageIndex =
        (currentImageIndex + 1) % displayedItems.length;

    showingBack = false;

    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = displayedItems[currentImageIndex].src;
    lightboxImg.classList.remove("postcard-back");

    updateFlipText();
}

function flipLightboxImage(event) {
    event.stopPropagation();

    const item = displayedItems[currentImageIndex];

    if (!item.hoverSrc) return;

    showingBack = !showingBack;

    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = showingBack ? item.hoverSrc : item.src;

    if (item.category === "postcards" && showingBack) {
        lightboxImg.classList.add("postcard-back");
    } else {
        lightboxImg.classList.remove("postcard-back");
    }

    updateFlipText();
}

function updateFlipText() {
    const flipText = document.getElementById("lightbox-flip-text");

    if (!flipText) return;

    const item = displayedItems[currentImageIndex];

    if (item.hoverSrc) {
        flipText.style.display = "block";
        flipText.textContent = showingBack
            ? "click image to view front"
            : "click image to view back";
    } else {
        flipText.style.display = "none";
    }
}

document
    .getElementById("lightbox-img")
    .addEventListener("click", flipLightboxImage);
