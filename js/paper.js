let currentImageIndex = 0;
let showingBack = false;

const gallery = document.getElementById("paper-gallery");

let displayedItems = [...paperItems];

const path = window.location.pathname.toLowerCase();

if (path.includes("advertisements")) {
    displayedItems = paperItems.filter(item => item.category === "advertisements");
} else if (path.includes("postcards")) {
    displayedItems = paperItems.filter(item => item.category === "postcards");
}

displayedItems.reverse();

displayedItems.forEach((item, index) => {
    const img = document.createElement("img");

    img.src = item.src;
    img.alt = item.title;
    img.className = "paper-thumbnail";

    let flipped = false;

    if (item.hoverSrc) {
        img.addEventListener("mouseenter", () => {
            if (!isMobile()) {
                img.src = item.hoverSrc;
            }
        });

        img.addEventListener("mouseleave", () => {
            if (!isMobile()) {
                img.src = item.src;
            }
        });
    }

    img.addEventListener("click", () => {
        if (isMobile() && item.hoverSrc && !flipped) {
            img.src = item.hoverSrc;
            flipped = true;
            return;
        }

        img.src = item.src;
        flipped = false;
        openLightbox(index);
    });

    gallery.appendChild(img);
});

function isMobile() {
    return window.matchMedia("(max-width: 700px)").matches;
}

function openLightbox(index) {
    currentImageIndex = index;
    showingBack = false;

    const item = displayedItems[currentImageIndex];

    document.getElementById("lightbox-img").src = item.src;
    document.getElementById("lightbox").style.display = "flex";

    updateFlipText();
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function previousImage(event) {
    event.stopPropagation();

    currentImageIndex =
        (currentImageIndex - 1 + displayedItems.length) %
        displayedItems.length;

    showingBack = false;

    document.getElementById("lightbox-img").src =
        displayedItems[currentImageIndex].src;

    updateFlipText();
}

function nextImage(event) {
    event.stopPropagation();

    currentImageIndex =
        (currentImageIndex + 1) %
        displayedItems.length;

    showingBack = false;

    document.getElementById("lightbox-img").src =
        displayedItems[currentImageIndex].src;

    updateFlipText();
}

function flipLightboxImage(event) {
    event.stopPropagation();

    const item = displayedItems[currentImageIndex];

    if (!item.hoverSrc) return;

    showingBack = !showingBack;

    document.getElementById("lightbox-img").src =
        showingBack ? item.hoverSrc : item.src;

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
