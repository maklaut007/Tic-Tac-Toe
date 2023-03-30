class Players {
  constructor() {
    this.currentPlayer = "X";
    this.playerOneElement = document.querySelector(".player-one");
    this.playerTwoElement = document.querySelector(".player-two");
    this.score = [0, 0];
    this.highlightCurrentPlayer();
  }
  switchPlayer = () => {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    this.highlightCurrentPlayer();
  };

  highlightCurrentPlayer = () => {
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
}
