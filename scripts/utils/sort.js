function initSort() {
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
