class Players {
  constructor() {
    this.currentPlayer = "X";
    this.playerOneElement = document.querySelector(".player-one");
    this.playerTwoElement = document.querySelector(".player-two");
    this.playerOneWinStatus =
      this.playerOneElement.querySelector(".victory-status");
    this.playerTwoWinStatus =
      this.playerTwoElement.querySelector(".victory-status");

    this.score = [0, 0];
    this.highlightCurrent();
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
  addWinnerScore = () => {
    if (this.currentPlayer === "X") {
      this.score[0]++;
      this.playerOneElement.querySelector("span").innerHTML = this.score[0];
    } else {
      this.score[1]++;
      this.playerTwoElement.querySelector("span").innerHTML = this.score[1];
    }
  };
  displayWinner = (isWin) => {
    console.log(isWin);
    if (!isWin) {
      document.querySelector(".tie-notification").innerHTML = "Tie";
      return;
    }

    if (this.currentPlayer === "X") {
      this.playerOneWinStatus.innerHTML = "Winner";
      this.playerOneWinStatus.classList.add("victory-status_win");
      this.playerTwoWinStatus.innerHTML = "Loser";
      this.playerTwoWinStatus.classList.add("victory-status_lose");
    } else {
      this.playerTwoWinStatus.innerHTML = "Winner";
      this.playerOneWinStatus.classList.add("victory-status_lose");
      this.playerOneWinStatus.innerHTML = "Loser";
      this.playerTwoWinStatus.classList.add("victory-status_win");
    }
  };
  clearVictoryStatus = () => {};
}
