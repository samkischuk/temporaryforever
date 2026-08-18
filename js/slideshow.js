const slideshowImage = document.getElementById("slideshow-image");

function showRandomSlide() {
    if (!photos.length) return;
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    slideshowImage.src = photoUrl(randomPhoto);
    slideshowImage.alt = "Archive photograph";
}

photosReady.then(function () {
    showRandomSlide();
    setInterval(showRandomSlide, 3000);
});
