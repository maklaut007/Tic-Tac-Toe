class Field {
  constructor() {
    this.fieldElement = document.querySelector(".field");
    this.cells = Array.from(document.querySelectorAll(".cell")).map(
      (cell, index) => new Cell(cell, index, this)
    );
    this.currentPlayer = "X";
  }
  nextTurn = () => {
    this.switchPlayer();
  };
  switchPlayer = () => {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
  };
}
