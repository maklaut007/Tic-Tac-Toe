class Players {
  constructor() {
    this.currentPlayer = "X";
    this.playerOneElement = document.querySelector(".player-one");
    this.playerTwoElement = document.querySelector(".player-two");
    this.playerOneWinStatus = document.querySelector(".victory-status_one");
    this.playerTwoWinStatus = document.querySelector(".victory-status_two");
    this.tieStatus = document.querySelector(".tie-notification");
    this.highlightCurrent();
    this.displayScore();
  }
  switchPlayer = () => {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    this.highlightCurrent();
  };

  highlightCurrent = () => {
    if (this.currentPlayer === "X") {
      this.playerOneElement.classList.add("highlight");
      this.playerTwoElement.classList.remove("highlight");
    } else {
      this.playerTwoElement.classList.add("highlight");
      this.playerOneElement.classList.remove("highlight");
    }
  };

  displayScore = () => {
    this.playerOneElement.querySelector("span").innerHTML =
      localStorage.getItem("playerOneScore");
    this.playerTwoElement.querySelector("span").innerHTML =
      localStorage.getItem("playerTwoScore");
  };
  increaseScore = () => {
    this.addWinnerScore();
    this.displayScore();
  };

  addWinnerScore = () => {
    this.currentPlayer === "X"
      ? this.addOneToLocalVariable("playerOneScore")
      : this.addOneToLocalVariable("playerTwoScore");
  };

  addOneToLocalVariable = (val) => {
    localStorage.setItem(val, +localStorage.getItem(val) + 1);
  };

  displayResults = (isWin) => {
    if (!isWin) {
      this.displayTie();
    } else {
      this.displayWinner();
    }
  };

  displayWinner = () => {
    this.currentPlayer === "X"
      ? this.changePlayersStatus(
          this.playerOneWinStatus,
          this.playerTwoWinStatus
        )
      : this.changePlayersStatus(
          this.playerTwoWinStatus,
          this.playerOneWinStatus
        );
  };

  displayTie = () => {
    this.tieStatus.innerHTML = "Tie";
  };

  changePlayersStatus = (winner, loser) => {
    winner.innerHTML = "Winner";
    winner.classList.add("victory-status_win");
    loser.innerHTML = "Loser";
    loser.classList.add("victory-status_lose");
  };

  removeResults = () => {
    this.playerOneWinStatus.classList.remove("victory-status_win");
    this.playerOneWinStatus.classList.remove("victory-status_lose");
    this.playerTwoWinStatus.classList.remove("victory-status_win");
    this.playerTwoWinStatus.classList.remove("victory-status_lose");

    this.tieStatus.innerHTML = "";
  };
}
