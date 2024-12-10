async function getPhotographers() {
    try {
        const response = await fetch("./assets/data/photographers.json");
        const json = await response.json();
        return { photographers: json.photographers };
    } catch {
        console.error("Erreur de chargement des photographes");
        return { photographers: [] };
    }
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();
