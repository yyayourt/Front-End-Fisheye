function getPhotographerId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
}

async function getPhotographerData() {
    const photographerId = getPhotographerId();
    return await getPhotographerById(photographerId);
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
        const mediaDOM = mediaModel.getUserCardsDOM();
        mediaGallery.appendChild(mediaDOM);
    });
}

async function init() {
    const { photographer, mediaList } = await getPhotographerData();
    await displayData();
    await displayMediaGallery();
    const main = document.getElementById("main");
    const mediaGallery = document.querySelector(".media-gallery");
    main.insertBefore(creatDropdown(), mediaGallery);

    main.appendChild(createPhotographerStats());
    updatePhotographerStats(mediaList, photographer);

    const mediaFiltre = sortGallery("popularity");
    initLightbox(mediaFiltre);
    initSort();
    initLikes();
}
init();
