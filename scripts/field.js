class Field {
  constructor() {
    this.fieldElement = document.querySelector(".field");
    this.players = new Players();
    this.cells = this.createCells();
    this.newGameButton = document.querySelector(".new-game");

    this.newGameButton.addEventListener("click", this.triggerNewGame);
  }

  createCells = () => {
    return Array.from(document.querySelectorAll(".cell")).map(
      (cell, index) => new Cell(cell, index, this)
    );
  };

  nextTurn = () => {
    this.checkWin();
    this.players.switchPlayer();
  };

  getArrayOfInnerValues() {
    return this.cells.map((cell) => {
      if (cell.isFilled) return cell.cellElement.innerHTML;
      else return "";
    });
  }
  checkWin = () => {
    let simpleArray = this.getArrayOfInnerValues();
    if (isWinCombination(simpleArray)) this.triggerWin();
    if (isFieldFull(simpleArray)) this.triggerTie();
  };

  triggerWin = () => {
    console.log("Winner is: " + this.players.currentPlayer);
    // this.triggerNewGame();
  };
  triggerTie = () => {
    console.log("Tie");
  };

  triggerNewGame = (event) => {
    if (event) event.preventDefault();
    this.cells.forEach((cell) => {
      cell.emptyCell();
    });
    if (this.players.currentPlayer === "O") this.players.switchPlayer();
  };
}
