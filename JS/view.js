/*  Groupe:B131 
    Nom: NGUYEN Doan
    Login: 52818
*/

/* Create the board */
function createBoard() {
    for (let row = 0; row < 20; row++) {
        for (let col = 0; col < 24; col++) {
            $("#board").append(
                $("<div>").addClass("square").attr("id", row + "-" + col)
            )
        }
    }
    $("#9-11").removeClass("square").addClass("lake");
    $("#9-12").removeClass("square").addClass("lake");
    $("#10-11").removeClass("square").addClass("lake");
    $("#10-12").removeClass("square").addClass("lake");
}

/* Display the snake */
function displaySnake() {
    $("#" + snake.head.row + "-" + snake.head.column).css("background-color", "darkgreen");

    for (let i = 0; i < snake.tail.length; i++) {
        $("#" + snake.tail[i].row + "-" + snake.tail[i].column).css("background-color", "lightgreen");
    }
}

/* Display fruits */
function displayFruits() {
    for (let i = 0; i < fruits.length; i++) {
        $("#" + fruits[i].position.row + "-" + fruits[i].position.column).css("background-color", "red");
    }
    for (let i = 0; i < specialFruits.length; i++) {
        $("#" + specialFruits[i].position.row + "-" + specialFruits[i].position.column).css("background-color", "yellow");
    }
}

/* Reset background color of board */
function resetColor() {
    $(".square").css("background-color", "lightgray");
    $(".lake").css("background-color", "blue");
}

/* Display the best score and current score */
function displayScore() {
    $("#playAgain").hide();
    $("#gameOver").hide();
    $("#resetScore").hide();

    if (isGameOver()) {
        $("#playAgain").show();
        $("#gameOver").show();
        $("#resetScore").show();

        if (isBestScore()) {
            changeBestScore();
        }

    } else {
        $("#bestScore").text(bestScore);
        $("#score").text(score);
        $("#name").text(name);
    }
}