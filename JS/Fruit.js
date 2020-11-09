/*  Groupe:B131 
    Nom: NGUYEN Doan
    Login: 52818
*/

class Fruit {

    /**
     * Constructor of Fruit
     * @param {*} position the position of the fruit on the board
     */
    constructor(position) {
        this._position = position;
    }

    get position() {
        return this._position;
    }
    set position(newPosition) {
        this._position = newPosition;
    }

}

/* Get a random number between 0 and 15 not included */
function getRandomNb() {
    return Math.floor(Math.random() * 20);
}

/* Create a fruit at a random time and position */
function addFruit() {
    if (getRandomNb() == 5) {
        let newFruit = new Fruit(new Position(getRandomNb(), getRandomNb()));
        fruits.push(newFruit);
    }
}

/* Make the snake grow if it ate the fruit and count total score */
function ateFruit() {
    for (let i = 0; i < fruits.length; i++) {
        if (snake.head.row == fruits[i].position.row && snake.head.column == fruits[i].position.column) {
            snake.grow();
            fruits.splice(i, 1);
            score += Math.floor(Math.random() * 50);
        }
    }
    for (let i = 0; i < specialFruits.length; i++) {
        if (snake.head.row == specialFruits[i].position.row && snake.head.column == specialFruits[i].position.column) {
            specialFruits.splice(i, 1);
            score += Math.floor(Math.random() * (-10));
        }
    }
}

/* Add fruits with negative points */
function addSpecialFruit() {
    if (getRandomNb() == 10) {
        let newFruit = new Fruit(new Position(getRandomNb(), getRandomNb()));
        specialFruits.push(newFruit);
    }
}