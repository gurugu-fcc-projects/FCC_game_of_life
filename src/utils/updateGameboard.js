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
