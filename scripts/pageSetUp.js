import {filterFromTag} from "./filterTags.js";
import {appendRecipesContainerTo} from "./createRecipeContainers.js";

export const tagsObject = {
    allRecipes: "All recipes",
    vegetarian: "Vegetarian",
    vegan: "Vegan",
    meatAndFish: "Meat & Fish",
    bread: "Bread",
    everythingSweet: "Everything sweet",
    breakfast: "Breakfast",
    snacks :"Snacks",
    sides :"Sides",
    sauces :"Sauces",
    drinks :"Drinks"
}

window.onload = () => {
    createFilters()
    showRecipes()
}

function createFilters() {
    const filtersSection = document.querySelector('.filters')
    const ulElement = document.createElement("ul")
    filtersSection.appendChild(ulElement)

    for (const [_, value] of Object.entries(tagsObject)) {
            const liElement = document.createElement("li")
            const button = document.createElement("button")

            button.addEventListener('click', () => filterFromTag(value))
            button.textContent = value

            liElement.appendChild(button)
            ulElement.appendChild(liElement)
    }
}

function showRecipes() {
    const recipesSection = document.querySelector('.recipes')
    const parentContainer = document.createElement("div")
    parentContainer.classList.add("parent-container")

    recipesSection.appendChild(parentContainer)
    appendRecipesContainerTo(parentContainer)
}
