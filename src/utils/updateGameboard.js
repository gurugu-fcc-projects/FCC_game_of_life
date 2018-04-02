import gameboard from "../reducers/gameboard";
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

  if (cell && (aliveNeighbours === 2 || aliveNeighbours === 3)) {
    return true;
  }
  if (!cell && aliveNeighbours === 3) {
    return true;
  }

  return false;
};

export const updateGameboard = gameboard => {
  // use this function to stop the game when all cells are dead
  // let deadCells = 0;
  console.time("updating");
  const updatedGameboard = gameboard.map((row, rowNum) => {
    return row.map((cell, cellNum) => {
      const isAlive = checkCell(cell, rowNum, cellNum, gameboard);
      // const cellElement = document.querySelector(`.${rowNum}-${cellNum}`);

      // if (cellElement.classList.contains("alive") && !isAlive) {
      //   cellElement.classList.remove("alive");
      // } else if (!cellElement.classList.contains("alive") && isAlive) {
      //   cellElement.classList.add("alive");
      // }
      // if (isAlive) deadCells += 1;

      return isAlive;
    });
  });

  // const allDead = deadCells === gameboard.length * 2;
  console.timeEnd("updating");

  return updatedGameboard;
};

//======================================
// Create empty object-based gameboard
//======================================

const minus = (current, max) => {
  if (current - 1 < 0) return max - 1;
  return current - 1;
};

const plus = (current, max) => {
  if (current + 1 === max) return 0;
  return current + 1;
};

const findAllNeighbours = (rowNum, colNum, gameboardSize) => ({
  [`${minus(rowNum, gameboardSize)}-${minus(colNum, gameboardSize)}`]: null,
  [`${minus(rowNum, gameboardSize)}-${colNum}`]: null,
  [`${minus(rowNum, gameboardSize)}-${plus(colNum, gameboardSize)}`]: null,
  [`${rowNum}-${minus(colNum, gameboardSize)}`]: null,
  [`${rowNum}-${plus(colNum, gameboardSize)}`]: null,
  [`${plus(rowNum, gameboardSize)}-${minus(colNum, gameboardSize)}`]: null,
  [`${plus(rowNum, gameboardSize)}-${colNum}`]: null,
  [`${plus(rowNum, gameboardSize)}-${plus(colNum, gameboardSize)}`]: null
});

export const createEmptyGameboard = gameboardSize => {
  //=== initialize gameboard
  let gameboard = {};

  //=== populate gameboard with empty cells
  for (let i = 0; i < gameboardSize; i++) {
    for (let j = 0; j < gameboardSize; j++) {
      gameboard[`${i}-${j}`] = {
        isAlive: false,
        rowNum: i,
        colNum: j,
        neighbours: findAllNeighbours(i, j, gameboardSize)
      };
    }
  }

  return gameboard;
};
