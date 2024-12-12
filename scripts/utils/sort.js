export function initSort() {
    const sortButton = document.querySelector(".sort-button");
    const sortOptions = document.querySelector(".sort-options");
    const options = document.querySelectorAll(".sort-options li");

    sortButton.addEventListener("click", () => {
        sortOptions.classList.toggle("active");
        const isExpanded = sortOptions.classList.contains("active");
        sortButton.setAttribute("aria-expanded", isExpanded);
    });

    options.forEach((option) => {
        option.addEventListener("click", () => {
            const value = option.dataset.value;
            const text = option.textContent;

            sortButton.innerHTML = `${text} <i class="fas fa-chevron-down"></i>`;

            sortOptions.classList.remove("active");

            sortGallery(value);
        });
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".custom-select")) {
            sortOptions.classList.remove("active");
        }
    });
}

export function sortGallery(sortType) {
    const mediaGallery = document.querySelector(".media-gallery");
    const mediaCards = Array.from(mediaGallery.getElementsByClassName("media-card"));

    mediaCards.sort((a, b) => {
        switch (sortType) {
            case "popularity":
                const likesA = parseInt(a.querySelector(".likes").textContent);
                const likesB = parseInt(b.querySelector(".likes").textContent);
                return likesB - likesA;

            case "date":
                const dateA = new Date(a.getAttribute("data-date"));
                const dateB = new Date(b.getAttribute("data-date"));
                return dateB - dateA;

            case "title":
                const titleA = a.querySelector(".media-title").textContent.toLowerCase();
                const titleB = b.querySelector(".media-title").textContent.toLowerCase();
                return titleA.localeCompare(titleB);

            default:
                return 0;
        }
    });

    mediaGallery.innerHTML = "";
    mediaCards.forEach((card) => mediaGallery.appendChild(card));
}
