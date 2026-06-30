let currentPaperIndex = 0;

const paperGallery = document.getElementById("paper-gallery");

let displayedPaperItems = paperItems;

if (window.location.pathname.includes("/advertisements/")) {
    displayedPaperItems = paperItems.filter(item => item.category === "advertisements");
}

if (window.location.pathname.includes("/postcards/")) {
    displayedPaperItems = paperItems.filter(item => item.category === "postcards");
}

displayedPaperItems.forEach((item, index) => {
    const img = document.createElement("img");

    img.src = item.src;
    img.alt = item.title;
    img.className = "thumbnail paper-thumbnail";

    img.addEventListener("click", function () {
        openLightbox(index);
    });

    paperGallery.appendChild(img);
});

function openLightbox(index) {
    currentPaperIndex = index;

    document.getElementById("lightbox-img").src = displayedPaperItems[index].src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function previousImage(event) {
    event.stopPropagation();

    currentPaperIndex =
        (currentPaperIndex - 1 + displayedPaperItems.length) % displayedPaperItems.length;

    document.getElementById("lightbox-img").src =
        displayedPaperItems[currentPaperIndex].src;
}

function nextImage(event) {
    event.stopPropagation();

    currentPaperIndex =
        (currentPaperIndex + 1) % displayedPaperItems.length;

    document.getElementById("lightbox-img").src =
        displayedPaperItems[currentPaperIndex].src;
}
