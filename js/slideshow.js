let slideIndex = 0;

function showNextSlide() {
    slideIndex = (slideIndex + 1) % photos.length;

    document.getElementById("slideshow-image").src =
        "images/" + photos[slideIndex].file;
}

setInterval(showNextSlide, 2000);
