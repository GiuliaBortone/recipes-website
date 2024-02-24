const recipeTags = ["Vegetarian", "Vegan", "Sides"] //TODO
let recipeContainer = null;

export function appendRecipesContainerTo(parentContainer) {
    //TODO this will loop on a list of recipes retrieved from a database
    for (let i = 0; i < 6; i++) {
        parentContainer.appendChild(createRecipeContainer())
    }
}

function createRecipeContainer() {
    recipeContainer = document.createElement("div")
    recipeContainer.classList.add("child-container")

    addImageToRecipeContainer()
    addNameToRecipeContainer()
    addTagsToRecipeContainer()

    return recipeContainer
}

function addImageToRecipeContainer() {
    const imgElement = document.createElement("img")
    recipeContainer.appendChild(imgElement)
}

function addNameToRecipeContainer() {
    const divRecipeNameContainer = document.createElement("div")
    const pRecipeName = document.createElement("p")
    pRecipeName.innerText = "nome ricetta" //TODO
    divRecipeNameContainer.appendChild(pRecipeName)
    recipeContainer.appendChild(divRecipeNameContainer)
}

function addTagsToRecipeContainer() {
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
    recipeContainer.appendChild(divTagsContainer)
}