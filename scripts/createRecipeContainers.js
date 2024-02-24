import recipes from '/resources/recipes.json' assert {type: 'json'}

let recipeContainer = null;

export function appendRecipesContainerTo(parentContainer) {
    recipes.forEach(recipe => {
        parentContainer.appendChild(createRecipeContainer(recipe))
    })
}

function createRecipeContainer(recipe) {
    recipeContainer = document.createElement("div")
    recipeContainer.classList.add("child-container")

    addImageToRecipeContainer(recipe.imgName)
    addRecipeContainerFooter(recipe)

    return recipeContainer
}

function addImageToRecipeContainer(imgName) {
    const imgElement = document.createElement("img")
    imgElement.src = "/resources/recipe_pictures/" + imgName

    recipeContainer.appendChild(imgElement)
}

function addRecipeContainerFooter(recipe) {
    const footerDiv = document.createElement("div")
    footerDiv.classList.add("recipe-container-footer")

    addNameToRecipeContainer(footerDiv, recipe.name)
    addTagsToRecipeContainer(footerDiv, recipe.tags)

    recipeContainer.appendChild(footerDiv)
}

function addNameToRecipeContainer(parentDiv, recipeName) {
    const divRecipeNameContainer = document.createElement("div")
    divRecipeNameContainer.classList.add("recipe-name")

    const pRecipeName = document.createElement("p")
    pRecipeName.innerText = recipeName
    divRecipeNameContainer.appendChild(pRecipeName)
    parentDiv.appendChild(divRecipeNameContainer)
}

function addTagsToRecipeContainer(parentDiv, recipeTags) {
    const divTagsContainer = document.createElement("div")
    divTagsContainer.classList.add("tags")

    const ulElement = document.createElement("ul")

    recipeTags.forEach(tag => {
        const liElement = document.createElement("li")
        const pElement = document.createElement("p")

        pElement.innerText = tag

        liElement.appendChild(pElement)
        ulElement.appendChild(liElement)
    })
    divTagsContainer.appendChild(ulElement)
    parentDiv.appendChild(divTagsContainer)
}
