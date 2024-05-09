class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.strength = 10;
        this.defense = 10;
    }

    attack(target) {
        target.health -= this.strength - target.defense/2;
    }

    heal() {
        this.health += 5;
    }

    defend() {
        this.defense += 5;
    }

    isAlive() {
        return this.health > 0;
    }

    getStats() {
        return `${this.name} has ${this.health} health, ${this.strength} strength, and ${this.defense} defense.`;
    }

    levelUp() {
        this.health += 10;
        this.strength += 5;
        this.defense += 5;
    }

    static create(name) {
        return new Character(name);
    }

    static createWarrior(name) {
        const warrior = new Character(name);
        warrior.strength += 10;
        warrior.defense += 5;
        return warrior;
    }

    static createWizard(name) {
        const wizard = new Character(name);
        wizard.strength += 5;
        wizard.defense += 10;
        return wizard;
    }

    static createRogue(name) {
        const rogue = new Character(name);
        rogue.strength += 5;
        rogue.defense += 5;
        return rogue;
    }
}

export default Character;