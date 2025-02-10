function createPhotographerStats() {
    const statsContainer = document.createElement("div");
    statsContainer.className = "photographer-stats";

    const likesContainer = document.createElement("div");
    likesContainer.className = "total-likes";

    const likesCount = document.createElement("span");
    likesCount.id = "total-likes-count";
    likesCount.setAttribute("data-likes", "0");

    const heartIcon = document.createElement("i");
    heartIcon.className = "fas fa-heart";

    const priceContainer = document.createElement("div");
    priceContainer.className = "price-per-day";

    const priceSpan = document.createElement("span");
    priceSpan.id = "photographer-price";
    priceSpan.setAttribute("data-price", "0");

    likesContainer.appendChild(likesCount);
    likesContainer.appendChild(heartIcon);

    priceContainer.appendChild(priceSpan);
    priceContainer.appendChild(document.createTextNode("€ / jour"));

    statsContainer.appendChild(likesContainer);
    statsContainer.appendChild(priceContainer);

    return statsContainer;
}

function updatePhotographerStats(mediaList, photographer) {
    const totalLikesElement = document.getElementById("total-likes-count");
    const photographerPriceElement = document.getElementById("photographer-price");

    const totalLikes = mediaList.reduce((sum, media) => sum + media.likes, 0);

    totalLikesElement.setAttribute("data-likes", totalLikes);
    totalLikesElement.textContent = totalLikes;

    photographerPriceElement.setAttribute("data-price", photographer.price);
    photographerPriceElement.textContent = photographer.price;
}
