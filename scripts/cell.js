class Cell {
  constructor(cellElement, index, currentPlayer = "circle") {
    this.cellElement = cellElement;
    this.currentPlayer = currentPlayer;
    this.index = index;
    this.isFilled = false;
    this.cellElement.addEventListener("click", this.onClickEvent);
  }

  onClickEvent = (event) => {
    event.preventDefault();
    if (!this.isFilled) {
      this.isFilled = true;
      this.cellElement.innerHTML = this.currentPlayer;
      console.log(this.index);
    }
  };
}
