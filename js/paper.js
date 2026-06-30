let currentImageIndex = 0;

const gallery = document.getElementById("paper-gallery");

let displayedItems = paperItems;

if (window.location.pathname.includes("/advertisements/")) {
    displayedItems = paperItems.filter(item => item.category === "advertisements");
}

if (window.location.pathname.includes("/postcards/")) {
    displayedItems = paperItems.filter(item => item.category === "postcards");
}

displayedItems.forEach((item, index) => {
    const img = document.createElement("img");

    img.src = item.src;
    img.alt = item.title;
    img.className = "thumbnail paper-thumbnail";

    img.onclick = function () {
        openLightbox(index);
    };

    gallery.appendChild(img);
});

function openLightbox(index) {
    currentImageIndex = index;
    document.getElementById("lightbox-img").src = displayedItems[index].src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function previousImage(event) {
    event.stopPropagation();

    currentImageIndex =
        (currentImageIndex - 1 + displayedItems.length) % displayedItems.length;

    document.getElementById("lightbox-img").src =
        displayedItems[currentImageIndex].src;
}

function nextImage(event) {
    event.stopPropagation();

    currentImageIndex =
        (currentImageIndex + 1) % displayedItems.length;

    document.getElementById("lightbox-img").src =
        displayedItems[currentImageIndex].src;
}
