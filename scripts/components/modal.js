export function createLightboxModal() {
    const modal = document.createElement("div");
    modal.className = "lightbox-modal";
    modal.innerHTML = `
        <div class="lightbox-content">
            <button class="close-button" aria-label="Fermer la modale">
                <i class="fas fa-times"></i>
            </button>
            <button class="nav-button prev" aria-label="Image précédente">
                <i class="fas fa-chevron-left"></i>
            </button>
            <div class="media-container"></div>
            <button class="nav-button next" aria-label="Image suivante">
                <i class="fas fa-chevron-right"></i>
            </button>
            <p class="media-title"></p>
        </div>
    `;
    return modal;
}

export function initLightbox() {
    const modal = createLightboxModal();
    document.body.appendChild(modal);

    let currentIndex = 0;
    let mediaElements = [];

    function updateMediaElements() {
        mediaElements = Array.from(document.querySelectorAll(".media-card"));
    }

    function showMedia(index) {
        updateMediaElements();
        currentIndex = index;

        const mediaContainer = modal.querySelector(".media-container");
        const titleElement = modal.querySelector(".media-title");
        const currentMedia = mediaElements[index];

        mediaContainer.innerHTML = "";

        if (currentMedia.querySelector("video")) {
            const video = currentMedia.querySelector("video").cloneNode(true);
            mediaContainer.appendChild(video);
        } else {
            const img = currentMedia.querySelector("img").cloneNode(true);
            mediaContainer.appendChild(img);
        }

        titleElement.textContent = currentMedia.querySelector(".media-title").textContent;
    }

    document.querySelector(".media-gallery").addEventListener("click", (e) => {
        const mediaCard = e.target.closest(".media-card");
        if (mediaCard) {
            updateMediaElements();
            const index = mediaElements.indexOf(mediaCard);
            if (index !== -1) {
                modal.classList.add("active");
                showMedia(index);
            }
        }
    });

    modal.querySelector(".close-button").addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + mediaElements.length) % mediaElements.length;
        showMedia(currentIndex);
    });

    modal.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % mediaElements.length;
        showMedia(currentIndex);
    });
}
