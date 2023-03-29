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
      arr[x * 3] === arr[x * 3 + 2] // check columns
    ) {
      result.isWin = true;
      result.winner = arr[x * 3];
    }
  }
  return result;
};
