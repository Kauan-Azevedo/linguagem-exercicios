class Scenario {
    constructor(player, enemy) {
        this.player = player;
        this.enemy = enemy;
    }

    start() {
        console.log('The battle begins!');
        console.log(this.player.getStats());
        console.log(this.enemy.getStats());
    }

    flee() {
        let rng = Math.floor(Math.random() * 10);
        console.log("Flee");

        if(rng <= 5 ) {
            console.log("Success");
            return true;
        }

        console.log("Failed")
        return false;
    }

    end() {
        console.log('The battle has ended!');
        console.log(this.player.getStats());
        console.log(this.enemy.getStats());
    }

    playerTurnChoices() {
        return ['attack', 'heal', "flee"];
    }

    enemyTurnRandomChoice() {
        const choices = ['attack', 'heal'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    playerAttacks() {
        this.player.attack(this.enemy);
    }

    enemyAttacks() {
        this.enemy.attack(this.player);
    }

    playerHeals() {
        this.player.heal();
    }

    enemyHeals() {
        this.enemy.heal();
    }

    fight() {
        this.start();

        while (this.player.isAlive() && this.enemy.isAlive()) {
            const playerAction = this.playerTurn();
            const enemyAction = this.enemyTurn();

            if (playerAction === 'attack') {
                this.playerAttacks();
            } else if (playerAction === 'heal') {
                this.playerHeals();
            } else if (playerAction === 'flee') {
                if (this.flee()) {
                    break
                }
            }

            if (enemyAction === 'attack') {
                this.enemyAttacks();
            } else if (enemyAction === 'heal') {
                this.enemyHeals();
            }

            console.log('Player:', this.player.getStats());
            console.log('Enemy:', this.enemy.getStats());
            console.log('--------------------');
        }

        this.end();
    }

    playerTurn() {
        const choices = this.playerTurnChoices();
        const choice = prompt('Your turn! Choose an action: ' + choices.join(', '));
        if (!choices.includes(choice)) {
            console.log('Invalid choice! Defaulting to attack.');
            return 'attack';
        }
        return choice;
    }

    enemyTurn() {
        const choice = this.enemyTurnRandomChoice();
        console.log('Enemy chose:', choice);
        return choice;
    }
}

export default Scenario;