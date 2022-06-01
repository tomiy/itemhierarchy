import Item from "./class/Item.js";
import * as Items from "./class/Items.js";
import Recipe from "./class/Recipe.js";

function renderTree() {
    Object.keys(Items).forEach(item => {
        let button = createSubtreeButton(Items[item]);
        document.getElementById("items").appendChild(button);
    });
}

function initSearch() {
    document.getElementById("search").addEventListener("input", e => {
        document.querySelectorAll("#items button").forEach(item => {
            let itemMatchesText = item.innerText.toLowerCase().includes(e.target.value.toLowerCase());
            item.style.display = itemMatchesText ? "inline-block" : "none";
        });
    });
}

/**
 * 
 * @param {Item} item 
 */
function createSubtreeButton(item) {
    let button = document.createElement("button");
    button.innerText = item.label;
    button.addEventListener("click", e => {
        clearSubtree();
        generateSubtree(item);
    });
    return button;
}

function clearSubtree() {
    let compoundsHTML = document.getElementById("compounds");
    while (compoundsHTML.firstChild && compoundsHTML.removeChild(compoundsHTML.firstChild));
    let componentsHTML = document.getElementById("components");
    while (componentsHTML.firstChild && componentsHTML.removeChild(componentsHTML.firstChild));
    let recipeinfoHTML = document.getElementById("recipeinfo");
    while (recipeinfoHTML.firstChild && recipeinfoHTML.removeChild(recipeinfoHTML.firstChild));
    let totalrecipecostsHTML = document.getElementById("totalrecipecosts");
    while (totalrecipecostsHTML.firstChild && totalrecipecostsHTML.removeChild(totalrecipecostsHTML.firstChild));
}

/**
 * 
 * @param {Item} item 
 */
function generateSubtree(item) {
    // Compounds
    let compoundsHTML = document.createElement("header");
    compoundsHTML.innerText = `Compounds`;
    document.getElementById("compounds").appendChild(compoundsHTML);

    item.compounds.forEach(compound => {
        let button = createSubtreeButton(compound);
        document.getElementById("compounds").appendChild(button);
    });

    // Item label
    let itemHTML = document.createElement("header");
    itemHTML.innerText = `Item: ${item.label}`;
    document.getElementById("recipeinfo").appendChild(itemHTML);

    item.recipes.forEach((recipe, index) => {
        let lineBreak = document.createElement("hr");
        let recipeIndex = document.createElement("header");
        recipeIndex.innerText = `Recipe ${index + 1}`;

        // Components
        document.getElementById("components").appendChild(lineBreak.cloneNode(true));
        document.getElementById("components").appendChild(recipeIndex.cloneNode(true));

        recipe.components.forEach(component => {
            let button = createSubtreeButton(component.item);
            button.innerText += ` x${component.quantity}`;
            document.getElementById("components").appendChild(button);
        });

        // Total Recipe Costs
        /** @type {Recipe[]} */
        let totalRecipeList = recipe.getTotalRecipes();

        totalRecipeList.forEach((totalRecipe, totalIndex) => {
            let lineBreak = document.createElement("hr");
            let recipeIndex = document.createElement("header");
            recipeIndex.innerText = `Recipe ${index + 1} - ${totalIndex + 1}`;

            document.getElementById("totalrecipecosts").appendChild(lineBreak.cloneNode(true));
            document.getElementById("totalrecipecosts").appendChild(recipeIndex.cloneNode(true));

            let totalTimeHTML = document.createElement("b");
            totalTimeHTML.innerText = `Total time (pessimistic): ${totalRecipe.recipeTime}s`;
            document.getElementById("totalrecipecosts").appendChild(totalTimeHTML);

            let totalTimeParallel = 0;
            totalRecipe.recipeTimeBreakDown.forEach(depthMap => totalTimeParallel += Math.max(...depthMap.values()));

            let totalTimeParallelHTML = document.createElement("b");
            totalTimeParallelHTML.innerText = `Total time (optimistic): ${totalTimeParallel}s`;
            document.getElementById("totalrecipecosts").appendChild(totalTimeParallelHTML);

            totalRecipe.recipeTimeBreakDown.forEach((depthMap, depth) => {
                depthMap.forEach((time, workstation) => {
                    let recipeTimeBreakDown = document.createElement("pre");
                    recipeTimeBreakDown.innerText = `${workstation.label}/depth ${depth + 1} - ${time}s`;
                    document.getElementById("totalrecipecosts").appendChild(recipeTimeBreakDown);
                });
            });

            totalRecipe.components.forEach(component => {
                let button = createSubtreeButton(component.item);
                button.innerText += ` x${Math.ceil(component.quantity)}`;
                document.getElementById("totalrecipecosts").appendChild(button);
            });
        })
    });
}

export default {
    renderTree: renderTree,
    initSearch: initSearch
};