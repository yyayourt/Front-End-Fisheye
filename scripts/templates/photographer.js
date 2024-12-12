function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement("article");

        const link = document.createElement("a");
        link.href = `photographer.html?id=${id}`;

        const img = document.createElement("img");
        img.setAttribute("src", picture);

        const h2 = document.createElement("h2");
        h2.textContent = name;

        const location = document.createElement("p");
        location.textContent = `${city}, ${country}`;
        location.className = "location";

        const taglineElement = document.createElement("p");
        taglineElement.textContent = tagline;
        taglineElement.className = "tagline";

        const priceElement = document.createElement("p");
        priceElement.textContent = `${price}€/jour`;
        priceElement.className = "price";

        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(link);
        article.appendChild(location);
        article.appendChild(taglineElement);
        article.appendChild(priceElement);
        return article;
    }
    return { getUserCardDOM };
}

function photographerTemplateHeader(data) {
    const { name, portrait, city, country, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardsDOM() {
        const article = document.createElement("article");
        const infoDiv = document.querySelector(".photograph-info");

        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", picture);

        const titleElement = document.createElement("h2");
        titleElement.textContent = name;

        const location = document.createElement("p");
        location.textContent = `${city}, ${country}`;
        location.className = "location";

        const taglineElement = document.createElement("p");
        taglineElement.textContent = tagline;
        taglineElement.className = "tagline";

        article.appendChild(imgElement);
        infoDiv.appendChild(titleElement);
        infoDiv.appendChild(location);
        infoDiv.appendChild(taglineElement);
        return article;
    }
    return { getUserCardsDOM };
}

function getPhotographer(photographerId) {
    const photographers = {
        243: "Mimi",
        930: "Ellie Rose",
        82: "Tracy",
        527: "Nabeel",
        925: "Rhode",
        195: "Marcel",
    };
    return photographers[photographerId];
}

function mediaTemplate(media) {
    const { id, photographerId, title, image, video, likes, date, price } = media;

    const photographerName = getPhotographer(photographerId);
    const mediaSource = image ? `assets/images/${photographerName}/${image}` : `assets/images/${photographerName}/${video}`;
    const isVideo = !!video;

    function getUserCardsDOM() {
        const article = document.createElement("article");
        article.className = "media-card";
        article.setAttribute("data-date", date);

        if (isVideo) {
            const videoElement = document.createElement("video");
            videoElement.setAttribute("src", mediaSource);
            videoElement.setAttribute("controls", true);
            article.appendChild(videoElement);
        } else {
            const imgElement = document.createElement("img");
            imgElement.setAttribute("src", mediaSource);
            imgElement.setAttribute("alt", title);
            article.appendChild(imgElement);
        }
        const infoContainer = document.createElement("div");
        infoContainer.className = "media-info";

        const titleElement = document.createElement("h3");
        titleElement.textContent = title;
        titleElement.className = "media-title";

        const likesElement = document.createElement("div");
        likesElement.className = "likes";
        likesElement.innerHTML = `${likes} <i class="fas fa-heart" aria-label="likes"></i>`;

        infoContainer.appendChild(titleElement);
        infoContainer.appendChild(likesElement);
        article.appendChild(infoContainer);

        return article;
    }
    return { getUserCardsDOM };
}

function sortTemplate() {
    function getDOM() {
        const sortContainer = document.createElement("div");
        sortContainer.className = "sort-container";

        const label = document.createElement("label");
        label.setAttribute("for", "sort-select");
        label.textContent = "Trier par";

        const customSelect = document.createElement("div");
        customSelect.className = "custom-select";

        const sortButton = document.createElement("button");
        sortButton.className = "sort-button";
        sortButton.setAttribute("aria-haspopup", "listbox");
        sortButton.innerHTML = `Popularité <i class="fas fa-chevron-down"></i>`;

        const sortOptions = document.createElement("ul");
        sortOptions.className = "sort-options";
        sortOptions.setAttribute("role", "listbox");

        const options = [
            { value: "popularity", text: "Popularité" },
            { value: "date", text: "Date" },
            { value: "title", text: "Titre" },
        ];

        options.forEach((option) => {
            const li = document.createElement("li");
            li.setAttribute("role", "option");
            li.setAttribute("data-value", option.value);
            li.textContent = option.text;
            sortOptions.appendChild(li);
        });

        customSelect.appendChild(sortButton);
        customSelect.appendChild(sortOptions);
        sortContainer.appendChild(label);
        sortContainer.appendChild(customSelect);

        return sortContainer;
    }

    return { getDOM };
}
