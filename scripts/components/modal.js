function createLightboxModal() {
    return (document.body.innerHTML += `
     <div class="lightbox-modal">
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
    </div>
    `);
}

function initLightbox(mediaElements) {
    createLightboxModal();
    const modal = document.querySelector(".lightbox-modal");
    let currentIndex = 0;
    let currentMedia;
    const mediaContainer = modal.querySelector(".media-container");
    const titleElement = modal.querySelector(".media-title");

    function showMedia(index) {
        currentIndex = index;

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

    document.querySelectorAll(".media-card img, .media-card video").forEach((mediaCardEl, index) => {
        mediaCardEl.addEventListener("click", function (e) {
            e.preventDefault();
            currentMedia = this.closest(".media-card");
            modal.classList.add("active");
            showMedia(index);
        });
    });

    modal.querySelector(".close-button").addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + mediaElements.length) % mediaElements.length;
        currentMedia = mediaElements[currentIndex];
        showMedia(currentIndex);
    });

    modal.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % mediaElements.length;
        currentMedia = mediaElements[currentIndex];
        showMedia(currentIndex);
    });
}
