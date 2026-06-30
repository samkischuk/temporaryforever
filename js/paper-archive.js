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

    img.onclick = function () {
        currentPaperIndex = index;
        document.getElementById("lightbox-img").src = displayedPaperItems[currentPaperIndex].src;
        document.getElementById("lightbox").style.display = "flex";
    };

    paperGallery.appendChild(img);
});

window.closeLightbox = function () {
    document.getElementById("lightbox").style.display = "none";
};

window.previousImage = function (event) {
    event.stopPropagation();

    currentPaperIndex =
        (currentPaperIndex - 1 + displayedPaperItems.length) % displayedPaperItems.length;

    document.getElementById("lightbox-img").src = displayedPaperItems[currentPaperIndex].src;
};

window.nextImage = function (event) {
    event.stopPropagation();

    currentPaperIndex =
        (currentPaperIndex + 1) % displayedPaperItems.length;

    document.getElementById("lightbox-img").src = displayedPaperItems[currentPaperIndex].src;
};
