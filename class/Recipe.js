import Item from "./Item.js";
import QuantityOfItem from "./QuantityOfItem.js";
import Workstation from "./Workstation.js";

export default class Recipe {
    /**
     * 
     * @param {Workstation} workstation 
     */
    constructor(workstation) {
        /** @type {QuantityOfItem[]} */
        this.components = new Array();
        this.recipeTime = 0;
        this.recipeYield = 1;

        /** @type {Workstation} */
        this.workstation = workstation;
        /** @type {Map<number, Map<Workstation, number>} */
        this.recipeTimeBreakDown = new Map();
    }

    /** @type {Item} */
    addComponent(item, quantity = 1) {
        let matchingComponent = this.components.find(other => other.item.label == item.label);
        if (matchingComponent) {
            matchingComponent.quantity += quantity;
        } else {
            this.components.push(new QuantityOfItem(item, quantity));
        }
        return this;
    }

    setRecipeTime(recipeTime) {
        this.recipeTime = recipeTime;
        return this;
    }

    setRecipeYield(recipeYield) {
        this.recipeYield = recipeYield;
        return this;
    }

    /**
     *
     * @param {number} depth 
     * @param {Workstation} workstation
     * @param {number} recipeTime
     */
    setOrUpdateRecipeTimeBreakdown(depth, workstation, recipeTime) {
        if (!this.recipeTimeBreakDown.get(depth)) {
            this.recipeTimeBreakDown.set(depth, new Map());
        }
        let depthMap = this.recipeTimeBreakDown.get(depth);
        if (!depthMap.get(workstation)) {
            depthMap.set(workstation, 0);
        }
        let recipeTimeBreakDown = depthMap.get(workstation);
        depthMap.set(workstation, Math.round((recipeTimeBreakDown + recipeTime) * 100) / 100);
    }

    /**
     * 
     * @param {Recipe} currentRecipe 
     * @param {Recipe[]} currentLevelRecipes 
     * @param {number} parentItemQuantityRequirement 
     * @returns 
     */
    getTotalRecipes(currentRecipe, currentLevelRecipes, parentItemQuantityRequirement = 1, depth = 0) {

        if (!currentRecipe) {
            currentRecipe = new Recipe();
        }

        if (!currentLevelRecipes) {
            currentLevelRecipes = new Array();
        }

        // Add recipe time
        currentLevelRecipes.forEach(currentLevelRecipe => {
            currentLevelRecipe.recipeTime += this.recipeTime * parentItemQuantityRequirement;
            currentLevelRecipe.setOrUpdateRecipeTimeBreakdown(depth, this.workstation, this.recipeTime * parentItemQuantityRequirement);
        });
        if (!currentLevelRecipes.some(currentLevelRecipe => currentLevelRecipe.equals(currentRecipe))) {
            currentRecipe.recipeTime += this.recipeTime * parentItemQuantityRequirement;
            currentRecipe.setOrUpdateRecipeTimeBreakdown(depth, this.workstation, this.recipeTime * parentItemQuantityRequirement);
        }

        // Recipes
        this.components.forEach(component => {
            if ((component.item.lootableMask & Item.FARMED) == 0 && component.item.recipes.length) {
                let newRecipesToAdd = new Array();

                let newRecipe = currentRecipe;
                let recipeToClone = currentRecipe.clone();

                let newLevelRecipes = currentLevelRecipes;
                let levelRecipesToClone = new Array();
                currentLevelRecipes.forEach(recipe => levelRecipesToClone.push(recipe.clone()));

                component.item.recipes.forEach((componentRecipe, index) => {
                    if (index > 0) {
                        newRecipe = recipeToClone.clone();
                        newLevelRecipes = new Array();
                        levelRecipesToClone.forEach(recipe => newLevelRecipes.push(recipe.clone()));
                    }
                    let itemQuantityRequirement = parentItemQuantityRequirement * component.quantity / componentRecipe.recipeYield;
                    newRecipesToAdd.push(...componentRecipe.getTotalRecipes(newRecipe, newLevelRecipes, itemQuantityRequirement, depth + 1));
                });
                newRecipesToAdd.forEach(newRecipe => {
                    if (!currentLevelRecipes.some(currentLevelRecipe => currentLevelRecipe.equals(newRecipe))) {
                        currentLevelRecipes.push(newRecipe);
                    }
                });
            }
        });

        // Components
        this.components.forEach(component => {
            if (!component.item.recipes.length || (component.item.lootableMask & Item.FARMED) > 0) {
                if (!currentLevelRecipes.some(currentLevelRecipe => currentLevelRecipe.equals(currentRecipe))) {
                    currentLevelRecipes.push(currentRecipe);
                }
                currentLevelRecipes.forEach(currentLevelRecipe => {
                    currentLevelRecipe.addComponent(component.item, component.quantity * parentItemQuantityRequirement);
                });
            }
        });

        return currentLevelRecipes;
    }

    /**
     * 
     * @param {Recipe} other 
     */
    equals(other) {
        return this.recipeTime == other.recipeTime && this.recipeYield == other.recipeYield &&
            this.components.every(component => other.components.some(otherComponent => component.equals(otherComponent)));
    }

    clone() {
        let clone = new Recipe();
        clone.recipeTime = this.recipeTime;
        clone.recipeYield = this.recipeYield;
        this.components.forEach(component => clone.addComponent(component.item, component.quantity));
        clone.recipeTimeBreakDown = new Map();
        this.recipeTimeBreakDown.forEach((depthMap, depth) => {
            clone.recipeTimeBreakDown.set(depth, new Map(depthMap));
        })

        return clone;
    }
}