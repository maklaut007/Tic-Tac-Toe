const isWinCombination = (arr) => {
  let result = {
    isWin: false,
    winner: "",
  };
  for (let x = 0; x < 3; x++) {
    if (
      arr[x] !== "" &&
      arr[x] === arr[x + 3] &&
      arr[x] === arr[x + 6] // check columns
    ) {
      result.isWin = true;
      result.winner = arr[x];
    } else if (
      arr[x * 3] !== "" &&
      arr[x * 3] === arr[x * 3 + 1] &&
      arr[x * 3] === arr[x * 3 + 2] // check rows
    ) {
      result.isWin = true;
      result.winner = arr[x * 3];
    }
  }
  if (
    (arr[0] === arr[4] && arr[0] === arr[8]) ||
    (arr[2] === arr[4] && arr[2] === arr[6])
  ) {
    result.isWin = true;
    result.winner = arr[4];
  }
  return result;
};

const createCircle = () => {
  let circle = document.createElement("div");
  let innerCircle = document.createElement("div");

  circle.className = "circle";
  innerCircle.className = "inner-circle";

  circle.appendChild(innerCircle);
  return circle;
};

const createX = () => {
  let cross = document.createElement("div");
  cross.className = "cross";
  cross.innerHTML = "&#x2716;";
  return cross;
};
