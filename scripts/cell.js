class Cell {
  constructor(cellElement, index, field) {
    this.cellElement = cellElement;
    this.field = field;
    this.index = index;
    this.isFilled = false;
    this.cellElement.addEventListener("click", this.click);
  }

  click = (event) => {
    event.preventDefault();
    if (!this.isFilled) {
      this.fill();
      this.field.nextTurn();
    }
  };

  fill = () => {
    this.isFilled = true;
    this.field.players.currentPlayer === "X" ? this.createX() : this.createO();
  };

  clear = () => {
    let randomTimer = Math.floor(Math.random() * 700);
    setTimeout(() => {
      this.rotate();
    }, randomTimer);
    setTimeout(() => {
      this.isFilled = false;
      this.cellElement.innerHTML = "";
    }, randomTimer + 500);
  };

  rotate = () => {
    if (this.cellElement.classList.contains("rotated")) {
      this.cellElement.classList.remove("rotated");
    } else this.cellElement.classList.add("rotated");
  };

  createO = () => {
    playMusic(".o-click-audio");
    let circle = document.createElement("div");
    let innerCircle = document.createElement("div");

    circle.className = "circle";
    innerCircle.className = "inner-circle";

    circle.appendChild(innerCircle);
    this.cellElement.appendChild(circle);
  };

  createX = () => {
    playMusic(".x-click-audio");
    let cross = document.createElement("div");
    cross.className = "cross";
    cross.innerHTML = "&#x2716;";
    this.cellElement.appendChild(cross);
  };
}
