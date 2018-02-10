//======================================
// Populate gameboard
//======================================

const minus = (current, max) => {
  if (current - 1 < 0) return max - 1;
  return current - 1;
};

const plus = (current, max) => {
  if (current + 1 === max) return 0;
  return current + 1;
};

const getNeighbouringCells = (currentCell, maxCell) => {
  const neighbourNW = [
    minus(currentCell[0], maxCell),
    minus(currentCell[1], maxCell)
  ];
  const neighbourNN = [minus(currentCell[0], maxCell), currentCell[1]];
  const neighbourNE = [
    minus(currentCell[0], maxCell),
    plus(currentCell[1], maxCell)
  ];
  const neighbourWW = [currentCell[0], minus(currentCell[1], maxCell)];
  const neighbourEE = [currentCell[0], plus(currentCell[1], maxCell)];
  const neighbourSW = [
    plus(currentCell[0], maxCell),
    minus(currentCell[1], maxCell)
  ];
  const neighbourSS = [plus(currentCell[0], maxCell), currentCell[1]];
  const neighbourSE = [
    plus(currentCell[0], maxCell),
    plus(currentCell[1], maxCell)
  ];

  return [
    neighbourNW.join("-"),
    neighbourNN.join("-"),
    neighbourNE.join("-"),
    neighbourWW.join("-"),
    neighbourEE.join("-"),
    neighbourSW.join("-"),
    neighbourSS.join("-"),
    neighbourSE.join("-")
  ];
};

export const populateGameboard = maxCell => {
  //=== initialize gameboard
  let gameboard = {};
  //=== populate gameboard with empty cells
  for (let i = 0; i < maxCell; i++) {
    for (let j = 0; j < maxCell; j++) {
      gameboard[`${i}-${j}`] = {
        alive: false,
        neighbours: getNeighbouringCells([i, j], maxCell)
      };
    }
  }

  return gameboard;
};
