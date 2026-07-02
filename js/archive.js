let currentImage = 0;
let masonryInstance = null;
let lastWindowWidth = window.innerWidth;

const gallery = document.getElementById("gallery");

photos.forEach((photo, index) => {
    const img = document.createElement("img");

    img.src = "/images/" + photo.file;
    img.alt = photo.file;
    img.className = "thumbnail";
    img.onclick = () => openLightbox(index);

    gallery.appendChild(img);
});

/* MASONRY LAYOUT */
function getGutter() {
    if (window.innerWidth <= 390) return 12;
    if (window.innerWidth <= 700) return 18;
    return 30;
}

function initMasonry() {
    if (masonryInstance) {
        masonryInstance.destroy();
    }

    masonryInstance = new Masonry(gallery, {
        itemSelector: ".thumbnail",
        columnWidth: ".thumbnail",
        gutter: getGutter(),
        percentPosition: true
    });
}

imagesLoaded(gallery, function () {
    initMasonry();
});

/* Recalculate masonry only if screen width actually changes */
window.addEventListener("resize", function () {
    const newWindowWidth = window.innerWidth;

    if (newWindowWidth !== lastWindowWidth) {
        lastWindowWidth = newWindowWidth;
        initMasonry();
    }
});

function hideBackToTop() {
    const backToTop = document.getElementById("back-to-top");

    if (backToTop) {
        backToTop.style.display = "none";
    }
}

function showBackToTopIfNeeded() {
    const backToTop = document.getElementById("back-to-top");

    if (backToTop && window.scrollY > 300) {
        backToTop.style.display = "block";
    }
}

function openLightbox(index) {
    currentImage = index;

    document.getElementById("lightbox-img").src =
        "/images/" + photos[currentImage].file;

    document.getElementById("lightbox-img").alt =
        photos[currentImage].file;

    document.getElementById("lightbox").style.display = "flex";

    hideBackToTop();
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";

    showBackToTopIfNeeded();
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
