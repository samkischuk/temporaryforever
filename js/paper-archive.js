document.addEventListener("DOMContentLoaded", function () {
    let currentImageIndex = 0;

    const gallery = document.getElementById("paper-gallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    paperItems.forEach((item, index) => {
        const img = document.createElement("img");

        img.src = item.src;
        img.alt = item.title;
        img.className = "thumbnail paper-thumbnail";

        img.onclick = function () {
            currentImageIndex = index;
            lightboxImg.src = paperItems[currentImageIndex].src;
            lightbox.style.display = "flex";
        };

        gallery.appendChild(img);
    });

    window.closeLightbox = function () {
        lightbox.style.display = "none";
    };

    window.previousImage = function (event) {
        event.stopPropagation();
        currentImageIndex = (currentImageIndex - 1 + paperItems.length) % paperItems.length;
        lightboxImg.src = paperItems[currentImageIndex].src;
    };

    window.nextImage = function (event) {
        event.stopPropagation();
        currentImageIndex = (currentImageIndex + 1) % paperItems.length;
        lightboxImg.src = paperItems[currentImageIndex].src;
    };
});
