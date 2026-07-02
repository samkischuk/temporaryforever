// Homepage Slideshow

const slideshowImage = document.getElementById("slideshow-image");

function showRandomSlide() {

    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];

    slideshowImage.src = "images/" + randomPhoto.file;
    slideshowImage.alt = randomPhoto.file;
}

// Show a random photo immediately
showRandomSlide();

// Show a different random photo every 3 seconds
setInterval(showRandomSlide, 3000);
