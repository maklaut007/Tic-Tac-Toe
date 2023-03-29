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

      this.field.players.currentPlayer === "X"
        ? this.cellElement.appendChild(createX())
        : this.cellElement.appendChild(createCircle());

      this.field.nextTurn();
    }
  };
  emptyCell = () => {
    this.isFilled = false;
    this.cellElement.innerHTML = "";
  };
}
