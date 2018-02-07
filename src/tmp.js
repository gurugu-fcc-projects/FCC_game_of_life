/*
  MAIN LOGIC

  1. loop through all cells - 
  {
    cell-0-0: 
    { 
      alive: true, 
      neighbours: ['cell-0-1', 'cell-1-0', 'cell-1-1']
    }, 
    cell-0-1: 
    { 
      alive: true, 
      neighbours: [ 'cell-0-0', 'cell-0-2', 'cell-1-0', 'cell-1-1', 'cell-1-2' ]
    }
  }

  1.1. for every cell loop through all neighbours and count the number of alive cells
  1.2. decide if the current cell should be dead or alive in the next generation and add the new cell into a new generation object
  1.3. overwrite old generation object with a new one (redux action)

  2. selecting a new board (larger or smaller) initiates redux action that overwrites an existing board with an empty one
  2.1. when you mark a cell as alive or dead its classname (used as cell name in state) is sent via redux action and is used to mark this cell, correspondingly, as alive or dead
  2.2. it is preferable to create a new state object, that represents a new game board, when you create a new table - the problem is how to find out and set neighbours

  3. NEIGHBOURS
  0-3 0-3 = 4x4

  3-3 3-0 3-1
  0-3 0-0 0-1
  1-3 1-0 1-1

  1-2 1-3 1-0
  2-2 2-3 2-0
  3-2 2-3 3-0


  function createNeighbours(currentCell, maxCell) {
    let newNeighbours = [];
    
    // currentCell e.g. 0-0
    // maxCell e.g. 3
    return ['cell-3-3', 'cell-3-0', 'cell-3-1' ...]
  }

  3.1 create gameboard by recursive method:
  = We start in cell 0-0 and run a recursive function that stops 
  when there are 8 neighbours saved for the current cell, if there
  are less than 8 neighbours, it ...
  = We write as neighbour the cell we came from? Or maybe we come back?
  = How do we iterate? Do we use a preset calculations form?
  Like this:
  [
    [-1, -1], [-1, 0], [-1, +1],
    [0, -1], [==, ==], [0, +1],
    [+1, -1], [+1, 0], [+1, +1]
  ]
  When the function runs we check if this cell already exists,
  and if not, we add it with the default data.
  Every cell receives this array as it's directions, then every
  time we arrive at this cell we take (pop) one of these directions,
  use it to calculate the next cell we visit, add this cell to the
  list of neighbours for the current cell, and then run the same recursive function, passing as the main argument this cell ID
  */

// const fromStringToInt = currentCell => {
//   //=== use RegExp to turn currentCell from 'string' into 'integer'
//   const [, firstCoord, secondCoord] = /^(\d+)-(\d+)$/.exec(currentCell);
//   return [Number(firstCoord), Number(secondCoord)];
// };

// helper function for createGameboard
const minus = (current, max) => {
  if (current - 1 < 0) return max - 1;
  return current - 1;
};

// helper function for createGameboard
const plus = (current, max) => {
  if (current + 1 > max) return 0;
  return current + 1;
};

// helper function for createGameboard
const getNeighbouringCells = (currentCell, maxCell) => {
  // use simple math operations to get all neighbours
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

export const createGameboard = maxCell => {
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

export const deadAlive = (cell, gameboard) => {
  // find cell
  // set cell as dead or alive
  // return new table
};
