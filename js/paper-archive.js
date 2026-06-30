let currentImageIndex = 0;

const gallery = document.getElementById("paper-gallery");

paperItems.forEach((item, index) => {
    const img = document.createElement("img");

    img.src = item.src;
    img.alt = item.title;
    img.className = "gallery-img";

    img.onclick = function () {
        openLightbox(index);
    };

    gallery.appendChild(img);
});

function openLightbox(index) {
    currentImageIndex = index;

    document.getElementById("lightbox-img").src = paperItems[index].src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function previousImage(event) {
    event.stopPropagation();

    currentImageIndex =
        (currentImageIndex - 1 + paperItems.length) % paperItems.length;

    document.getElementById("lightbox-img").src =
        paperItems[currentImageIndex].src;
}

function nextImage(event) {
    event.stopPropagation();

    currentImageIndex =
        (currentImageIndex + 1) % paperItems.length;

    document.getElementById("lightbox-img").src =
        paperItems[currentImageIndex].src;
}
