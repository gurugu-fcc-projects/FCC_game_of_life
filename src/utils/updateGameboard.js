//======================================================
// Update array-based gameboard
//======================================================

const minus = (current, max) => {
  if (current - 1 < 0) return max - 1;
  return current - 1;
};

const plus = (current, max) => {
  if (current + 1 === max) return 0;
  return current + 1;
};

const findAliveNeighbours = (rowNum, cellNum, gameboard) => {
  const max = gameboard.length,
    neighbours = [
      [minus(rowNum, max), minus(cellNum, max)],
      [minus(rowNum, max), cellNum],
      [minus(rowNum, max), plus(cellNum, max)],
      [rowNum, minus(cellNum, max)],
      [rowNum, plus(cellNum, max)],
      [plus(rowNum, max), minus(cellNum, max)],
      [plus(rowNum, max), cellNum],
      [plus(rowNum, max), plus(cellNum, max)]
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
  const updatedGameboard = gameboard.map((row, rowNum) => {
    return row.map((cell, cellNum) => {
      const isAlive = checkCell(cell, rowNum, cellNum, gameboard);
      return isAlive;
    });
  });

  return updatedGameboard;
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
