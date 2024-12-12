import { apiService } from "../services/services.js";
import { initSort } from "../utils/sort.js";
import { initLightbox } from "../components/modal.js";

function getPhotographerId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
}

async function getPhotographerData() {
    const photographerId = getPhotographerId();
    return await apiService.getPhotographerById(photographerId);
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
    await getPhotographerData();
    await displayData();
    await displayMediaGallery();
    const sortSection = sortTemplate();
    const main = document.getElementById("main");
    const mediaGallery = document.querySelector(".media-gallery");
    main.insertBefore(sortSection.getDOM(), mediaGallery);
    initSort();
    initLightbox();
}
init();
