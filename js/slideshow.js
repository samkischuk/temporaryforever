// Homepage Slideshow

let slideIndex = 0;

const slideshowImage = document.getElementById("slideshow-image");

// Show the newest photo immediately
slideshowImage.src = "images/" + photos[0].file;
slideshowImage.alt = photos[0].title;

// Change photos every 2 seconds
function showNextSlide() {

    slideIndex++;

    if (slideIndex >= photos.length) {
        slideIndex = 0;
    }

    slideshowImage.src = "images/" + photos[slideIndex].file;
    slideshowImage.alt = photos[slideIndex].title;

}

setInterval(showNextSlide, 2000);
