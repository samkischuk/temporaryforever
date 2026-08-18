function letPhotoChooseYou() {
    photosReady.then(function () {
        if (!photos.length) return;
        const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
        window.location.href =
            "/archive/?photo=" + encodeURIComponent(randomPhoto.file);
    });
}
