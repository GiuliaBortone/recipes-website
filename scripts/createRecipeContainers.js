const recipeTags = ["Vegetarian", "Vegan", "Sides", "Snack", "Breakfast"] //TODO
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
    addRecipeContainerFooter()

    return recipeContainer
}

function addImageToRecipeContainer() {
    const imgElement = document.createElement("img")
    recipeContainer.appendChild(imgElement)
}

function addRecipeContainerFooter() {
    const footerDiv = document.createElement("div")
    footerDiv.classList.add("recipe-container-footer")

    addNameToRecipeContainer(footerDiv)
    addTagsToRecipeContainer(footerDiv)

    recipeContainer.appendChild(footerDiv)
}

function addNameToRecipeContainer(parentDiv) {
    const divRecipeNameContainer = document.createElement("div")
    divRecipeNameContainer.classList.add("recipe-name")

    const pRecipeName = document.createElement("p")
    pRecipeName.innerText = "nome ricetta lungooooooooooooooooooooooooooooooo" //TODO
    divRecipeNameContainer.appendChild(pRecipeName)
    parentDiv.appendChild(divRecipeNameContainer)
}

function addTagsToRecipeContainer(parentDiv) {
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