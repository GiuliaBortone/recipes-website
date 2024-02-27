import {getAllRecipes, showRecipes} from "./createRecipeContainers.js";
import {tagsObject} from "./pageSetUp.js";

export function filterFromTag(tag) {
    const parentRecipeContainer = document.querySelector('.parent-container')
    parentRecipeContainer.innerHTML = ""

    const allRecipes = getAllRecipes()
    if (tag === tagsObject.allRecipes) {
        showRecipes(parentRecipeContainer, allRecipes)
    }

    const filteredRecipes = allRecipes.filter(recipe => recipe.tags.includes(tag))
    showRecipes(parentRecipeContainer, filteredRecipes)
}
