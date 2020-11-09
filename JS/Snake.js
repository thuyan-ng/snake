/*  Groupe:B131 
    Nom: NGUYEN Doan
    Login: 52818
*/

class Snake {
    /**
     * Constructor of Snake
     * @param {*} head the position of the head
     * @param {*} direction the direction (North, South, West, East) where the snake is heading
     * @param {*} tail the tail of the snake (tab of Position)
     */
    constructor(head, direction, tail) {
        this._head = head;
        this._direction = direction;
        this._tail = tail;
    }
    get head() {
        return this._head;
    }
    get direction() {
        return this._direction;
    }
    get tail() {
        return this._tail;
    }
    set head(newHead) {
        this._head = newHead;
    }
    set direction(newDirection) {
        this._direction = newDirection;
    }
    set tail(newTail) {
        this._tail = newTail;
    }

    /* Make the snake move */
    move(newDirection) {
        let newHead = new Position(this.head.row, this.head.column);
        this.tail.unshift(newHead);
        this.tail.pop();
        switch (newDirection) {
            case "N":
                if (this.head.row == 0) {
                    this.head.row = 19;
                } else {
                    this.head.row -= 1;
                } break;
            case "S":
                if (this.head.row == 19) {
                    this.head.row = 0;
                } else {
                    this.head.row += 1;
                } break;
            case "W":
                if (this.head.column == 0) {
                    this.head.column = 23;
                } else {
                    this.head.column -= 1;
                } break;
            case "E":
                if (this.head.column == 23) {
                    this.head.column = 0;
                } else {
                    this.head.column += 1;
                } break;
        }
    }

    /* Change snake's direction depending on pressed arrowkey (no turning back) */
    changeDirection(e) {
        e = window.event;
        switch (e.keyCode) {
            case 37:
                if (this.direction != "E") {
                    newDirection = "W";
                } break;
            case 38:
                if (this.direction != "S") {
                    newDirection = "N";
                } break;
            case 39:
                if (this.direction != "W") {
                    newDirection = "E";
                } break;
            case 40:
                if (this.direction != "N") {
                    newDirection = "S";
                } break;
        }
        this.direction = newDirection;
    }

    /* Make the snake grow and add 10 points to score*/
    grow() {
        let lastTail = this.tail[tail.length - 1];
        if (this.tail.length < 1) {
            lastTail = this.tail[tail.length];
        }
        this.tail.push(new Position(lastTail.row, lastTail.column));
        score += 10;
    }
}

