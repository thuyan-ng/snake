/*  Groupe:B131 
    Nom: NGUYEN Doan
    Login: 52818
*/

class Position {
    /**
     * Constructor of Position
     * @param {*} row the row of the position
     * @param {*} column the column of the position
     */
    constructor(row, column) {
        this._row = row;
        this._column = column;
    }
    get row() {
        return this._row;
    }
    get column() {
        return this._column;
    }
    set row(newRow) {
        this._row = newRow;
    }
    set column(newColumn) {
        this._column = newColumn;
    }
}