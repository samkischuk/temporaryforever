let currentImage = 0;

const gallery = document.getElementById("gallery");

photos.forEach((photo, index) => {
    const img = document.createElement("img");

    img.src = "/images/" + photo.file;
    img.alt = photo.title;
    img.className = "thumbnail";
    img.onclick = () => openLightbox(index);

    gallery.appendChild(img);
});

function openLightbox(index) {
    currentImage = index;

    document.getElementById("lightbox-img").src =
        "/images/" + photos[currentImage].file;

    document.getElementById("lightbox-img").alt =
        photos[currentImage].title;

    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function nextImage(event) {
    event.stopPropagation();

    currentImage = (currentImage + 1) % photos.length;
    openLightbox(currentImage);
}

function previousImage(event) {
    event.stopPropagation();

    currentImage = (currentImage - 1 + photos.length) % photos.length;
    openLightbox(currentImage);
}

document.getElementById("lightbox").addEventListener("click", closeLightbox);

document.getElementById("lightbox-img").addEventListener("click", function(event) {
    event.stopPropagation();
});

document.addEventListener("keydown", function(event) {
    if (document.getElementById("lightbox").style.display !== "flex") return;

    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") nextImage(event);
    if (event.key === "ArrowLeft") previousImage(event);
});

/* Open selected photo from URL */
const urlParams = new URLSearchParams(window.location.search);
const selectedPhoto = urlParams.get("photo");

if (selectedPhoto) {
    const selectedIndex = photos.findIndex(photo => photo.file === selectedPhoto);

    if (selectedIndex !== -1) {
        setTimeout(() => {
            openLightbox(selectedIndex);
        }, 300);
    }
}
