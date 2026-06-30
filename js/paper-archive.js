document.addEventListener("DOMContentLoaded", function () {
    let currentPaperIndex = 0;

    const paperGallery = document.getElementById("paper-gallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

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

        img.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            currentPaperIndex = index;
            lightboxImg.src = displayedPaperItems[currentPaperIndex].src;
            lightbox.style.display = "flex";
        });

        paperGallery.appendChild(img);
    });

    lightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightboxImg.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    window.closeLightbox = function () {
        lightbox.style.display = "none";
    };

    window.previousImage = function (event) {
        event.stopPropagation();

        currentPaperIndex =
            (currentPaperIndex - 1 + displayedPaperItems.length) % displayedPaperItems.length;

        lightboxImg.src = displayedPaperItems[currentPaperIndex].src;
    };

    window.nextImage = function (event) {
        event.stopPropagation();

        currentPaperIndex =
            (currentPaperIndex + 1) % displayedPaperItems.length;

        lightboxImg.src = displayedPaperItems[currentPaperIndex].src;
    };
});
