function creatDropdown() {
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

function initSort() {
    const sortButton = document.querySelector(".sort-button");
    const sortOptions = document.querySelector(".sort-options");
    const options = document.querySelectorAll(".sort-options li");

    sortButton.addEventListener("click", () => {
        const currentValue = sortButton.getAttribute("data-value") || "popularity";

        options.forEach((option) => {
            if (option.getAttribute("data-value") === currentValue) {
                option.style.display = "none";
            } else {
                option.style.display = "block";
            }
        });

        sortOptions.classList.toggle("active");
        const isExpanded = sortOptions.classList.contains("active");
        sortButton.setAttribute("aria-expanded", isExpanded);
    });

    options.forEach((option) => {
        option.addEventListener("click", () => {
            const value = option.getAttribute("data-value");
            const text = option.textContent;

            sortButton.innerHTML = `${text} <i class="fas fa-chevron-down"></i>`;
            sortButton.setAttribute("data-value", value);
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
