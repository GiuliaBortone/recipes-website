let recipeContainer = null;
const recipesJsonDirectory = '/resources/recipe_jsons/'

let allRecipes = []

export function getAllRecipes() {
    return allRecipes
}

export function appendRecipesContainerTo(parentContainer) {
    const recipesUnordered = []

    fetch(recipesJsonDirectory)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser()
            const doc = parser.parseFromString(html, 'text/html')
            const links = Array.from(doc.querySelectorAll('a'))
            const jsonFiles = links.filter(link => link.href.endsWith('.json'))

            const fetchPromises = jsonFiles.map(file => {
                const fileName = file.textContent;
                const filePath = recipesJsonDirectory + fileName;

                return fetch(filePath)
                    .then(response => response.json())
                    .then(data => {
                        recipesUnordered.push(data);
                    })
                    .catch(error => console.error(`Error fetching or parsing ${fileName}:`, error));
            });

            return Promise.all(fetchPromises);
        })
        .then(() => {
            allRecipes = recipesUnordered.sort(sortRecipesByDateAdded)
            showRecipes(parentContainer, allRecipes)
        })
        .catch(error => console.error(`Error fetching directory:`, error))
}

export function showRecipes(parentContainer, recipes) {
    recipes.forEach(recipe => {
        parentContainer.appendChild(createRecipeContainer(recipe))
    })
}

function sortRecipesByDateAdded(recipeA, recipeB) {
    const dateAddedA = new Date(recipeA["day-added"].year, recipeA["day-added"].month - 1, recipeA["day-added"].day);
    const dateAddedB = new Date(recipeB["day-added"].year, recipeB["day-added"].month - 1, recipeB["day-added"].day);
    return dateAddedB - dateAddedA;
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
