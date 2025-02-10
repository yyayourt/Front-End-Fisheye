function sortGallery(sortType) {
    const mediaGallery = document.querySelector(".media-gallery");
    const mediaCards = Array.from(mediaGallery.getElementsByClassName("media-card"));

    mediaCards.sort((a, b) => {
        switch (sortType) {
            case "popularity":
                const likesA = parseInt(a.getAttribute("data-likes"));
                const likesB = parseInt(b.getAttribute("data-likes"));
                return likesB - likesA;

            case "date":
                const dateA = new Date(a.getAttribute("data-date"));
                const dateB = new Date(b.getAttribute("data-date"));
                return dateB - dateA;

            case "title":
                const titleA = a.getAttribute("data-title").toLowerCase();
                const titleB = b.getAttribute("data-title").toLowerCase();
                return titleA.localeCompare(titleB);

            default:
                return 0;
        }
    });

    mediaCards.forEach((card) => mediaGallery.appendChild(card));

    return mediaCards;
}
