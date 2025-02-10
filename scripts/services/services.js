async function getPhotographers() {
    return fetch(`assets/data/photographers.json`)
        .then((response) => response.json())
        .then((res) => res)
        .catch((error) => console.error("Erreur lors de la récupération des photographes:", error));
}

async function getPhotographerById(id) {
    const data = await getPhotographers();
    const photographer = data.photographers.find((p) => p.id === parseInt(id));
    const mediaList = data.media.filter((m) => m.photographerId === parseInt(id));
    return { photographer, mediaList };
}
