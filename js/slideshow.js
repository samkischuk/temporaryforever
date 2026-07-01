// Homepage Slideshow

// Start on a random image
let slideIndex = Math.floor(Math.random() * photos.length);

const slideshowImage = document.getElementById("slideshow-image");

// Show random photo immediately
slideshowImage.src = "images/" + photos[slideIndex].file;
slideshowImage.alt = photos[slideIndex].title;

// Change photos every 3 seconds
function showNextSlide() {

    slideIndex++;

    if (slideIndex >= photos.length) {
        slideIndex = 0;
    }

    slideshowImage.src = "images/" + photos[slideIndex].file;
    slideshowImage.alt = photos[slideIndex].title;

}

setInterval(showNextSlide, 3000);
