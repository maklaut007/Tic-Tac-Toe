class Cell {
  constructor(cellElement, index, field) {
    this.cellElement = cellElement;
    this.field = field;
    this.index = index;
    this.isFilled = false;
    this.cellElement.addEventListener("click", this.onClickEvent);
  }

  onClickEvent = (event) => {
    event.preventDefault();
    if (!this.isFilled) {
      this.isFilled = true;
      this.cellElement.innerHTML = this.field.currentPlayer;
      this.field.nextTurn();
      console.log(this.index);
    }
  };
}
