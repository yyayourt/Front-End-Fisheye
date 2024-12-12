class ApiService {
    constructor() {
        this.baseUrl = "./assets/data";
    }

    async getPhotographers() {
        try {
            const response = await fetch(`${this.baseUrl}/photographers.json`);
            const data = await response.json();
            return data.photographers;
        } catch (error) {
            console.error("Erreur lors de la récupération des photographes:", error);
            return [];
        }
    }

    async getMedia() {
        try {
            const response = await fetch(`${this.baseUrl}/photographers.json`);
            const data = await response.json();
            return data.media;
        } catch (error) {
            console.error("Erreur lors de la récupération des médias:", error);
            return [];
        }
    }

    async getPhotographerById(id) {
        try {
            const response = await fetch(`${this.baseUrl}/photographers.json`);
            const data = await response.json();
            const photographer = data.photographers.find((p) => p.id === parseInt(id));
            const mediaList = data.media.filter((m) => m.photographerId === parseInt(id));
            return { photographer, mediaList };
        } catch (error) {
            console.error("Erreur lors de la récupération du photographe:", error);
            return { photographer: null, mediaList: [] };
        }
    }
}

export const apiService = new ApiService();
