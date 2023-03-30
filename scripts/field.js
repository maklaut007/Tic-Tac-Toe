class Field {
  constructor() {
    this.fieldElement = document.querySelector(".field");
    this.players = new Players();
    this.cells = this.createCells();
    this.newGameButton = document.querySelector(".new-game");
    this.isGameOver = false;
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
    this.triggerEndgame(this.players.currentPlayer);
    document.querySelector(".win-audio").play();
  };
  triggerTie = () => {
    this.triggerEndgame();
    document.querySelector(".tie-audio").play();
  };
  triggerEndgame = (winner = null) => {
    this.fieldElement.classList.add("unclickable");
    displayWinner(winner);
  };

  clearField = () => {
    this.cells.forEach((cell) => {
      cell.emptyCell();
    });
    if (this.players.currentPlayer === "O") this.players.switchPlayer();
  };
  triggerNewGame = (event) => {
    event.preventDefault();
    this.fieldElement.classList.remove("unclickable");
    removeWinner();
    this.clearField();
    document.querySelector(".new-game-audio").play();
  };
}
