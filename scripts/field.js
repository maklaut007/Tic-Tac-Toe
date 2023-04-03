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
    if (!this.isRoundCompleted()) {
      this.players.switchPlayer();
    }
  };

  arrayOfCellValues() {
    return this.cells.map((cell) => {
      if (cell.isFilled) return cell.cellElement.innerHTML;
      else return "";
    });
  }

  isRoundCompleted = () => {
    let simpleArray = this.arrayOfCellValues();
    if (isWinCombination(simpleArray)) {
      this.triggerWin();
      return true;
    }
    if (isFieldFull(simpleArray)) {
      this.triggerTie();
      return true;
    }
    return false;
  };

  triggerWin = () => {
    this.showResult(true);
    this.players.increaseScore();
    playMusic(".win-audio");
  };

  triggerTie = () => {
    this.showResult(false);
    playMusic(".tie-audio");
  };

  showResult = (isWin = false) => {
    this.fieldElement.classList.add("unclickable");
    this.players.displayResults(isWin);
  };

  clean = () => {
    this.cells.forEach((cell) => {
      cell.clear();
    });
    if (this.players.currentPlayer === "O") this.players.switchPlayer();
  };

  startNewGame = (event) => {
    event.preventDefault();
    this.fieldElement.classList.remove("unclickable");
    this.players.removeResults();
    this.clean();
    playMusic(".new-game-audio");
  };
}
