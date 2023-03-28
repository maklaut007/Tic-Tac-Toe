class Field {
  constructor() {
    this.fieldElement = document.querySelector(".field");
    this.cells = Array.from(document.querySelectorAll(".cell")).map(
      (cell) => new Cell(cell)
    );
    console.log(this.cells);
  }
}
