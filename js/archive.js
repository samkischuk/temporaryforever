let currentImage = 0;
let masonryInstance = null;
let lastWindowWidth = window.innerWidth;
const gallery = document.getElementById("gallery");

function getGutter() {
    if (window.innerWidth <= 390) return 12;
    if (window.innerWidth <= 700) return 18;
    return 30;
}

function initMasonry() {
    if (masonryInstance) masonryInstance.destroy();
    masonryInstance = new Masonry(gallery, {
        itemSelector: ".thumbnail",
        columnWidth: ".thumbnail",
        gutter: getGutter(),
        percentPosition: true
    });
}

function renderArchive() {
    const selectedCategory = gallery.dataset.category;
    if (selectedCategory) {
        photos = photos.filter(function (photo) {
            return photo.category === selectedCategory;
        });
    }

    photos.forEach(function (photo, index) {
        const img = document.createElement("img");
        img.src = photoUrl(photo);
        img.alt = "Archive photograph";
        img.className = "thumbnail";
        img.loading = "lazy";
        img.onclick = function () { openLightbox(index); };
        gallery.appendChild(img);
    });

    imagesLoaded(gallery, initMasonry);

    const selectedPhoto = new URLSearchParams(window.location.search).get("photo");
    if (selectedPhoto) {
        const selectedIndex = photos.findIndex(function (photo) {
            return photo.file === selectedPhoto || photoUrl(photo) === selectedPhoto;
        });
        if (selectedIndex !== -1) {
            setTimeout(function () { openLightbox(selectedIndex); }, 300);
        }
    }
}

photosReady.then(renderArchive);

window.addEventListener("resize", function () {
    const newWindowWidth = window.innerWidth;
    if (newWindowWidth !== lastWindowWidth && gallery.children.length) {
        lastWindowWidth = newWindowWidth;
        initMasonry();
    }
});

function hideBackToTop() {
    const backToTop = document.getElementById("back-to-top");
    if (backToTop) backToTop.style.display = "none";
}

function showBackToTopIfNeeded() {
    const backToTop = document.getElementById("back-to-top");
    if (backToTop && window.scrollY > 300) backToTop.style.display = "block";
}

function openLightbox(index) {
    currentImage = index;
    const lightboxImage = document.getElementById("lightbox-img");
    lightboxImage.src = photoUrl(photos[currentImage]);
    lightboxImage.alt = "Expanded archive photograph";
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
document.getElementById("lightbox-img").addEventListener("click", function (event) {
    event.stopPropagation();
});

document.addEventListener("keydown", function (event) {
    if (document.getElementById("lightbox").style.display !== "flex") return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") nextImage(event);
    if (event.key === "ArrowLeft") previousImage(event);
});
