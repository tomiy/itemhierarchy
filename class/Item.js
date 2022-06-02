import Recipe from "./Recipe.js";

export default class Item {
    /**
     * 
     * @param {string} label 
     */
    constructor(label, lootableMask = Item.CRAFTED) {
        this.label = label;
        this.lootableMask = lootableMask;
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

Item.CRAFTED = 0b001;
Item.LOOTED = 0b010;
Item.FARMED = 0b100;