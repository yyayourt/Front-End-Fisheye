//Mettre le code JavaScript lié à la page photographer.html
function getPhotographerId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
}

async function getPhotographerData() {
    try {
        const response = await fetch("./data/photographers.json");
        const data = await response.json();
        const photographerId = parseInt(getPhotographerId());

        const photographer = data.photographers.find((p) => p.id === photographerId);
        const mediaList = data.media.filter((m) => m.photographerId === photographerId);

        console.log(data);
        console.log(photographer);
        console.log(mediaList);

        return { photographer, mediaList };
    } catch (error) {
        console.log("erreur de la recupération de données:", error);
    }
}

async function displayData() {
    const { photographer } = await getPhotographerData();
    const photographersSection = document.querySelector(".photograph-header");
    const photographerModel = photographerTemplateHeader(photographer);
    const userCardDOM = photographerModel.getUserCardsDOM();
    photographersSection.appendChild(userCardDOM);
}

async function displayMediaGallery() {
    const { mediaList } = await getPhotographerData();
    const mediaGallery = document.querySelector(".media-gallery");

    mediaList.forEach((media) => {
        const mediaModel = mediaTemplate(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaGallery.appendChild(mediaCardDOM);
    });
}

async function init() {
    await getPhotographerData();
    await displayData();
    await displayMediaGallery();
}
init();
