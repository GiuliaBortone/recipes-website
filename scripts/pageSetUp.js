import {filterFromTag} from "./filterTags.js";
import {appendRecipesContainerTo} from "./createRecipeContainers.js";

const tags = ["All recipes", "Vegetarian", "Vegan",
    "Meat & Fish", "Bread",
    "Everything sweet", "Breakfast",
    "Snacks", "Sides", "Drinks"]

window.onload = () => {
    createFilters()
    showRecipes()
}

function createFilters() {
    const filtersSection = document.querySelector('.filters')
    const ulElement = document.createElement("ul")
    filtersSection.appendChild(ulElement)

    tags.forEach(tag => {
        const liElement = document.createElement("li")
        const button = document.createElement("button")

        button.addEventListener('click', () => filterFromTag(tag))
        button.textContent = tag

        liElement.appendChild(button)
        ulElement.appendChild(liElement)
    })
}

function showRecipes() {
    const recipesSection = document.querySelector('.recipes')
    const parentContainer = document.createElement("div")
    parentContainer.classList.add("parent-container")

    recipesSection.appendChild(parentContainer)
    appendRecipesContainerTo(parentContainer)
}
