import {getAllRecipes, showRecipes} from "./createRecipeContainers.js";

export function filterFromTag(tag) {
    console.log("hello " + tag)
    keepRecipesWithFilter(tag)
}

function keepRecipesWithFilter(tagName) {
    const parentRecipeContainer = document.querySelector('.parent-container')
    parentRecipeContainer.innerHTML = ""

    const allRecipes = getAllRecipes()
    if (tagName === "All recipes") {
        showRecipes(parentRecipeContainer, allRecipes)
    }

    const filteredRecipes = allRecipes.filter(recipe => recipe.tags.includes(tagName))
    showRecipes(parentRecipeContainer, filteredRecipes)
}