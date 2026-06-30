let currentImageIndex = 0;

const gallery = document.getElementById("paper-gallery");

paperItems.forEach((item, index) => {
    const img = document.createElement("img");

    img.src = item.src;
    img.alt = item.title;
    img.className = "thumbnail paper-thumbnail";

    img.onclick = function () {
        openLightbox(index);
    };

    gallery.appendChild(img);
});
