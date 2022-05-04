import Item from "./Item.js";

export default class QuantityOfItem {
    /**
     * 
     * @param {Item} item 
     * @param {number} quantity 
     */
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
    }

    equals(other) {
        return this.item == other.item && this.quantity == other.quantity;
    }
}