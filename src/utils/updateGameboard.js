//======================================================
// Update gameboard with new dead and alive cells
//======================================================

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
