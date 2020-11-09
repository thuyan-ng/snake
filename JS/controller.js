/*  Groupe:B131 
    Nom: NGUYEN Doan
    Login: 52818
*/

let position = new Position(getRandomNb(), getRandomNb());
let tail = [new Position(position.row - 1, position.column)];
let snake = new Snake(position, "N", tail);
let fruits = [];
let specialFruits = [];
let newDirection = "N";
let score = 0;
let bestScore = 0;
let name = "";

/* Create the board and load the best score */
function initialize() {
    createBoard();
    loadBestScore();
}

/* Redirect to new game page */
function playAgain() {
    location.href = "../Main/jeu.html";
}

/* Start the game until game over */
function game() {
    if (!isGameOver()) {
        window.onkeydown = snake.changeDirection;
        resetColor();

        displayScore();
        displaySnake();

        addFruit();
        addSpecialFruit();
        displayFruits();

        snake.move(newDirection);
        ateFruit();

    } else {
        clearInterval(startGame);
        displayScore();
    }
}

/* If the snake bites his tail, the game is over */
function isGameOver() {
    let gameOver = false;
    for (let i = 0; i < tail.length; i++) {
        if (snake.head.row == tail[i].row && snake.head.column == tail[i].column) {
            gameOver = true;
        }
    }
    return gameOver || onLake();
}
/* Check if the snake is on a lake */
function onLake() {
    return ((snake.head.row == 9 && snake.head.column == 11) || (snake.head.row == 9 && snake.head.column == 12)
        || (snake.head.row == 10 && snake.head.column == 11) || (snake.head.row == 10 && snake.head.column == 12))
}

/* Check if the player has beaten the best score */
function isBestScore() {
    let isBestScore = false;
    if (score > bestScore) {
        bestScore = score;
        isBestScore = true;
    }
    getName();
    return isBestScore;
}

/* Get the name of the player who beat the best score */
function getName() {
    name = prompt("Bravo, vous avez battu le meilleur score! Quel est votre nom? ");
}

/* Load the best score */
function loadBestScore() {
    bestScore = localStorage.getItem("bestScore");
    name = localStorage.getItem("name");
}
/* Save the best score */
function saveBestScore() {
    localStorage.setItem("bestScore", bestScore);
    localStorage.setItem("name", name);
}
/* Change the best score if current player beat it */
function changeBestScore() {
    saveBestScore();
    $("#bestScore").text(bestScore);
    $("#name").text(name);
}
/* Reset the score and the name */
function resetScore() {
    bestScore = localStorage.setItem("bestScore", 0);
    name = localStorage.setItem("name", "");
    alert("Meilleur score réinitialisé!");
}
