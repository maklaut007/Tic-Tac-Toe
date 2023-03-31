const isWinCombination = (arr) => {
  let result = false;

  for (let x = 0; x < 3; x++) {
    if (
      // check columns
      arr[x] !== "" &&
      arr[x] === arr[x + 3] &&
      arr[x] === arr[x + 6]
    ) {
      result = true;
    }
    if (
      // check rows
      arr[x * 3] !== "" &&
      arr[x * 3] === arr[x * 3 + 1] &&
      arr[x * 3] === arr[x * 3 + 2]
    ) {
      result = true;
    }
  }
  if (
    // check diagonals
    (arr[0] !== "" && arr[0] === arr[4] && arr[0] === arr[8]) ||
    (arr[4] !== "" && arr[2] === arr[4] && arr[2] === arr[6])
  ) {
    result = true;
  }
  return result;
};

const isFieldFull = (arr) => {
  if (arr.filter((element) => element === "").length === 0) {
    return true;
  }
  return false;
};

const removeWinner = () => {
  let notification = document.querySelector(".game-result");
  notification.innerHTML = "";
};

playMusic = (audioSelector) => {
  document.querySelector(audioSelector).play();
};
