import Character from "./character.js";

class Player extends Character {
    constructor(name) {
        super(name);
        this.inventory = [];
    }

    addItem(item) {
        this.inventory.push(item);
    }

    removeItem(item) {
        const index = this.inventory.indexOf(item);
        if (index !== -1) {
            this.inventory.splice(index, 1);
        }
    }

    getInventory() {
        return this.inventory;
    }

    getStats() {
        return `${super.getStats()} Inventory: ${this.inventory.join(', ')}`;
    }
}

export default Player;