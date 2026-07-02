// Homepage Slideshow

// Start on a random image
let slideIndex = Math.floor(Math.random() * photos.length);

const slideshowImage = document.getElementById("slideshow-image");

function showSlide() {
    slideshowImage.src = "images/" + photos[slideIndex].file;
    slideshowImage.alt = photos[slideIndex].file;
}

// Show random photo immediately
showSlide();

// Change photos every 3 seconds
function showNextSlide() {

    slideIndex++;

    if (slideIndex >= photos.length) {
        slideIndex = 0;
    }

    showSlide();
}

setInterval(showNextSlide, 3000);
