let currentImageIndex = 0;

const gallery = document.getElementById("paper-gallery");

// Start with all paper items
let displayedItems = [...paperItems];

// Filter by category based on page
if (window.location.pathname.includes("/advertisements/")) {
    displayedItems = paperItems.filter(item => item.category === "advertisements");
}

if (window.location.pathname.includes("/postcards/")) {
    displayedItems = paperItems.filter(item => item.category === "postcards");
}

// Show newest items first
displayedItems.reverse();

// Build gallery
displayedItems.forEach((item, index) => {
    const img = document.createElement("img");

    img.src = item.src;
    img.alt = item.title;
 img.className = "paper-thumbnail";

    img.onclick = function () {
        openLightbox(index);
    };

    gallery.appendChild(img);
});

// Lightbox
function openLightbox(index) {
    currentImageIndex = index;

    document.getElementById("lightbox-img").src =
        displayedItems[currentImageIndex].src;

    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function previousImage(event) {
    event.stopPropagation();

    currentImageIndex =
        (currentImageIndex - 1 + displayedItems.length) %
        displayedItems.length;

    document.getElementById("lightbox-img").src =
        displayedItems[currentImageIndex].src;
}

function nextImage(event) {
    event.stopPropagation();

    currentImageIndex =
        (currentImageIndex + 1) %
        displayedItems.length;

    document.getElementById("lightbox-img").src =
        displayedItems[currentImageIndex].src;
}
