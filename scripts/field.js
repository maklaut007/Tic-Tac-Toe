class Field {
  constructor() {
    this.fieldElement = document.querySelector(".field");
    this.players = new Players();
    this.cells = this.createCells();
    this.newGameButton = document.querySelector(".new-game");
    this.newGameButton.addEventListener("click", this.startNewGame);
  }

  createCells = () => {
    return Array.from(document.querySelectorAll(".cell")).map(
      (cell, index) => new Cell(cell, index, this)
    );
  };

  nextTurn = () => {
    this.checkGameStage();
    this.players.switchPlayer();
  };

  arrayOfCellValues() {
    return this.cells.map((cell) => {
      if (cell.isFilled) return cell.cellElement.innerHTML;
      else return "";
    });
  }

  checkGameStage = () => {
    let simpleArray = this.arrayOfCellValues();
    if (isWinCombination(simpleArray)) this.triggerWin();
    else if (isFieldFull(simpleArray)) this.triggerTie();
  };

  triggerWin = () => {
    this.showResult(this.players.currentPlayer);
    this.players.addWinnerScore();
    playMusic(".win-audio");
  };

  triggerTie = () => {
    this.showResult();
    playMusic(".tie-audio");
  };

  showResult = (winner = null) => {
    this.fieldElement.classList.add("unclickable");
    displayWinner(winner);
  };

  clear = () => {
    this.cells.forEach((cell) => {
      cell.emptyCell();
    });
    if (this.players.currentPlayer === "O") this.players.switchPlayer();
  };

  startNewGame = (event) => {
    event.preventDefault();
    this.fieldElement.classList.remove("unclickable");
    removeWinner();
    this.clear();
    playMusic(".new-game-audio");
  };
}
