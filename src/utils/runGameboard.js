// Compute next state of the gameboard

export const isAlive = (cell, gameboard) => {
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

export const checkGameboard = gameboard => {
  //=== update gameboard with new dead/alive status
  const updatedGameboard = {};
  // console.log(gameboard);
  for (let cell in gameboard) {
    updatedGameboard[cell] = {
      alive: isAlive(gameboard[cell], gameboard),
      neighbours: gameboard[cell].neighbours
    };
  }
  console.log("checking gameboard...");

  return updatedGameboard;
};
