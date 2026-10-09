
const searchInput = document.getElementById("searchInput");
const recipeContainer = document.getElementById("recipeContainer");
const recipeForm = document.getElementById("recipeForm");

function searchRecipes() {
    const searchText = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".recipe-card");

    cards.forEach(function(card) {
        const recipeName = card.querySelector("h3").textContent.toLowerCase();
        const description = card.querySelector("p").textContent.toLowerCase();

        if (recipeName.includes(searchText) || description.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

searchInput.addEventListener("input", searchRecipes);

function showRecipe(name, instructions) {
    alert(name + "\n\nInstructions:\n" + instructions);
}

recipeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("recipeName").value.trim();
    const description = document.getElementById("recipeDescription").value.trim();

    if (name === "" || description === "") {
        alert("Please fill in all fields.");
        return;
    }

    const card = document.createElement("article");
    card.className = "recipe-card";

    const title = document.createElement("h3");
    title.textContent = name;

    const text = document.createElement("p");
    text.textContent = description;

    const button = document.createElement("button");
    button.textContent = "View Recipe";
    button.addEventListener("click", function() {
        showRecipe(name, description);
    });

    card.appendChild(title);
    card.appendChild(text);
    card.appendChild(button);

    recipeContainer.prepend(card);
    recipeForm.reset();

    alert("Recipe added successfully!");
});