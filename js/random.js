function letPhotoChooseYou() {

    const randomIndex = Math.floor(Math.random() * photos.length);

    window.location.href =
        "/archive/?photo=" + encodeURIComponent(photos[randomIndex].file);

}
