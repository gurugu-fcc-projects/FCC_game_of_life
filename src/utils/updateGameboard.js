import gameboard from "../reducers/gameboard";
//======================================================
// Update array-based gameboard
//======================================================

const checkCell = (isAlive, aliveNeighbours) => {
  if (isAlive && (aliveNeighbours === 2 || aliveNeighbours === 3)) {
    return true;
  }
  if (!isAlive && aliveNeighbours === 3) {
    return true;
  }

  return false;
};

export const updateGameboard = gameboard => {
  console.time("updating");
  const newGameboard = Object.assign({}, gameboard);

  for (let cell in newGameboard) {
    const currentCell = newGameboard[cell];
    // let aliveNeighbours = 0;
    const aliveNeighbours = currentCell.neighbours.filter(
      neighbour => newGameboard[neighbour].isAlive
    );
    //=== count alive neighbours & update them with current cell state
    // for (let neighbour in currentCell.neighbours) {
    //=== check neighbour if we don't know its state already
    // if (currentCell.neighbours[neighbour] === null) {
    // const neighbourCell = newGameboard[neighbour];

    //=== update neighbour cell "neighbours" state
    // neighbourCell.neighbours[cell] = currentCell.isAlive;
    //=== increase aliveNeighbours count if neighbour is alive
    // if (newGameboard[neighbour].isAlive) aliveNeighbours += 1;
    // } else {
    //=== increase aliveNeighbours count if neighbour is alive
    // if (currentCell.neighbours[neighbour] === true) aliveNeighbours += 1;
    // }
    //=== set neighbour state to NULL for the next updateGameboard iteration
    // currentCell.neighbours[neighbour] = null;
    // }

    //=== set dead/alive state for the current cell
    currentCell.isAlive = checkCell(
      currentCell.isAlive,
      aliveNeighbours.length
    );
  }

  // const allDead = deadCells === gameboard.length * 2;
  console.timeEnd("updating");

  return newGameboard;
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

// const findAllNeighbours = (rowNum, colNum, gameboardSize) => ({
//   [`${minus(rowNum, gameboardSize)}-${minus(colNum, gameboardSize)}`]: null,
//   [`${minus(rowNum, gameboardSize)}-${colNum}`]: null,
//   [`${minus(rowNum, gameboardSize)}-${plus(colNum, gameboardSize)}`]: null,
//   [`${rowNum}-${minus(colNum, gameboardSize)}`]: null,
//   [`${rowNum}-${plus(colNum, gameboardSize)}`]: null,
//   [`${plus(rowNum, gameboardSize)}-${minus(colNum, gameboardSize)}`]: null,
//   [`${plus(rowNum, gameboardSize)}-${colNum}`]: null,
//   [`${plus(rowNum, gameboardSize)}-${plus(colNum, gameboardSize)}`]: null
// });

const findAllNeighbours = (rowNum, colNum, gameboardSize) => [
  `${minus(rowNum, gameboardSize)}-${minus(colNum, gameboardSize)}`,
  `${minus(rowNum, gameboardSize)}-${colNum}`,
  `${minus(rowNum, gameboardSize)}-${plus(colNum, gameboardSize)}`,
  `${rowNum}-${minus(colNum, gameboardSize)}`,
  `${rowNum}-${plus(colNum, gameboardSize)}`,
  `${plus(rowNum, gameboardSize)}-${minus(colNum, gameboardSize)}`,
  `${plus(rowNum, gameboardSize)}-${colNum}`,
  `${plus(rowNum, gameboardSize)}-${plus(colNum, gameboardSize)}`
];

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
