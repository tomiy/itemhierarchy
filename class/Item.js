import Recipe from "./Recipe.js";

export default class Item {
    /**
     * 
     * @param {string} label 
     */
    constructor(label) {
        this.label = label;
        /** @type {Recipe[]} */
        this.recipes = new Array();
        /** @type {Item[]} */
        this.compounds = new Array();
    }

    /**
     * 
     * @param {Recipe} recipe 
     * @returns 
     */
    addRecipe(recipe) {
        recipe.components.forEach(component => component.item.compounds.push(this));
        this.recipes.push(recipe);
        return this;
    }
}