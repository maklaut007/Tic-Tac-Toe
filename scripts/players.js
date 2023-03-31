class Players {
  constructor() {
    this.currentPlayer = "X";
    this.playerOneElement = document.querySelector(".player-one");
    this.playerTwoElement = document.querySelector(".player-two");
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
    let notification = document.querySelector(".game-result");
    notification.classList.add("game-result__display");
    if (!isWin) {
      notification.innerHTML = "Tie";
    } else notification.innerHTML = `The winner is ${this.currentPlayer}`;
  };
}
