class Field {
  constructor() {
    this.fieldElement = document.querySelector(".field");
    this.cells = Array.from(document.querySelectorAll(".cell")).map(
      (cell, index) => new Cell(cell, index, this)
    );
    this.currentPlayer = "X";
  }
  nextTurn = () => {
    this.checkWin();
    this.switchPlayer();
  };
  switchPlayer = () => {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
  };
  checkWin = () => {
    let simpleArray = this.cells.map((cell) => {
      if (cell.isFilled) return cell.cellElement.innerHTML;
      else return "";
    });
    console.log(isWinCombination(simpleArray));
  };
}
