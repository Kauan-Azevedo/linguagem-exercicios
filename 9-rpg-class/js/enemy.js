import Character from "./character.js";

class Enemy extends Character {
    constructor(name) {
        super(name);
    }

    getStats() {
        return `${super.getStats()} This is an enemy!`;
    }
}

export default Enemy;