//======================================================
// Update gameboard with new dead and alive cells
//======================================================

/*
const isAlive = (cell, gameboard) => {
  const aliveNeighbours = cell.neighbours.filter(
    neighbour => gameboard[neighbour].alive
  ).length;

  if (cell.alive && (aliveNeighbours === 2 || aliveNeighbours === 3)) {
    return true;
  }
  if (!cell.alive && aliveNeighbours === 3) {
    return true;
  }

  return false;
};

export const checkDeadAlive = gameboard => {
  //=== update gameboard with new dead/alive status
  const updatedGameboard = {};

  for (let cell in gameboard) {
    updatedGameboard[cell] = {
      alive: isAlive(gameboard[cell], gameboard),
      neighbours: gameboard[cell].neighbours
    };
  }

  return updatedGameboard;
};
*/

//======================================
// Create empty gameboard
//======================================

/*
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

export const createEmptyGameboard = maxCell => {
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
*/

//======================================================
// Update array-based gameboard
//======================================================

const minus2 = (current, max) => {
  if (current - 1 < 0) return max - 1;
  return current - 1;
};

const plus2 = (current, max) => {
  if (current + 1 === max) return 0;
  return current + 1;
};

const findAliveNeighbours = (rowNum, cellNum, gameboard) => {
  const max = gameboard.length,
    neighbours = [
      [minus2(rowNum, max), minus2(cellNum, max)],
      [minus2(rowNum, max), cellNum],
      [minus2(rowNum, max), plus2(cellNum, max)],
      [rowNum, minus2(cellNum, max)],
      [rowNum, plus2(cellNum, max)],
      [plus2(rowNum, max), minus2(cellNum, max)],
      [plus2(rowNum, max), cellNum],
      [plus2(rowNum, max), plus2(cellNum, max)]
    ];

  return neighbours.filter(neighbour => gameboard[neighbour[0]][neighbour[1]])
    .length;
};

const checkCell = (cell, rowNum, cellNum, gameboard) => {
  const aliveNeighbours = findAliveNeighbours(rowNum, cellNum, gameboard);

  if (cell && (aliveNeighbours.length === 2 || aliveNeighbours.length === 3)) {
    return true;
  }
  if (!cell && aliveNeighbours.length === 3) {
    return true;
  }

  return false;
};

export const updateGameboard = gameboard => {
  return gameboard.map((row, rowNum) => {
    return row.map((cell, cellNum) => {
      return checkCell(cell, rowNum, cellNum, gameboard);
    });
  });
};

//======================================
// Create empty array-based gameboard
//======================================

export const createEmptyGameboard = maxCell => {
  //=== initialize gameboard
  let gameboard = [];

  //=== populate gameboard with empty cells
  for (let i = 0; i < maxCell; i++) {
    let row = [];
    for (let j = 0; j < maxCell; j++) {
      row.push(false);
    }
    gameboard.push(row);
  }

  return gameboard;
};
