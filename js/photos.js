let photos = [];

function photoUrl(photo) {
    if (!photo || !photo.file) return "";
    return photo.file.startsWith("/") ? photo.file : "/images/" + photo.file;
}

const photosReady = fetch("/data/photos.json", { cache: "no-cache" })
    .then(function (response) {
        if (!response.ok) throw new Error("Photo archive could not be loaded.");
        return response.json();
    })
    .then(function (data) {
        photos = Array.isArray(data.photos) ? data.photos : [];
        return photos;
    })
    .catch(function (error) {
        console.error(error);
        return photos;
    });
