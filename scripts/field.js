class Field {
  constructor() {
    this.fieldElement = document.querySelector(".field");
    this.cells = Array.from(document.querySelectorAll(".cell")).map(
      (cell, index) => new Cell(cell, index)
    );
    console.log(this.cells);
  }
}
