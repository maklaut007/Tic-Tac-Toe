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

      if (this.field.players.currentPlayer === "X") {
        this.cellElement.appendChild(createX());
        document.querySelector(".x-click-audio").play();
      } else {
        this.cellElement.appendChild(createCircle());
        document.querySelector(".o-click-audio").play();
      }

      this.field.nextTurn();
    }
  };
  emptyCell = () => {
    this.isFilled = false;
    this.cellElement.innerHTML = "";
  };
}
