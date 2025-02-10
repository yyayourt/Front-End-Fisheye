function initLikes() {
    const likeButtons = document.querySelectorAll(".likes");

    likeButtons.forEach((button) => {
        button.setAttribute("data-liked", "false");

        button.addEventListener("click", function () {
            const likesCount = this.textContent.split(" ")[0];
            const isLiked = this.getAttribute("data-liked") === "true";

            if (isLiked) {
                const newLikesCount = parseInt(likesCount) - 1;
                this.innerHTML = `${newLikesCount} <i class="fas fa-heart" aria-label="likes"></i>`;
                this.setAttribute("data-liked", "false");

                const totalLikesElement = document.getElementById("total-likes-count");
                const currentTotalLikes = parseInt(totalLikesElement.getAttribute("data-likes"));
                const newTotalLikes = currentTotalLikes - 1;
                totalLikesElement.setAttribute("data-likes", newTotalLikes);
                totalLikesElement.textContent = newTotalLikes;
            } else {
                const newLikesCount = parseInt(likesCount) + 1;
                this.innerHTML = `${newLikesCount} <i class="fas fa-heart" aria-label="likes"></i>`;
                this.setAttribute("data-liked", "true");

                const totalLikesElement = document.getElementById("total-likes-count");
                const currentTotalLikes = parseInt(totalLikesElement.getAttribute("data-likes"));
                const newTotalLikes = currentTotalLikes + 1;
                totalLikesElement.setAttribute("data-likes", newTotalLikes);
                totalLikesElement.textContent = newTotalLikes;
            }
        });
    });
}
