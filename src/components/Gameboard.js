import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const Gameboard = ({ gameboard, mouseDrag, dragMouse, toggleCell }) => {
  const createGameboard = (width, height) => {
    if (gameboard) {
      console.log(gameboard);
      let gameboardTable = [];

      for (let i = 0; i < height; i++) {
        let row = [];
        for (let j = 0; j < width; j++) {
          const cellName = `${i}-${j}`;
          row.push(
            <td
              key={j}
              className={
                cellName + (gameboard[cellName].alive ? " active" : "")
              }
            >
              {" "}
              {`cell-${cellName}`}{" "}
            </td>
          );
        }

        gameboardTable.push(<tr key={i}>{row}</tr>);
      }

      return gameboardTable;
    }
  };

  const handleMouseDown = ({ target }) => {
    dragMouse(true);
    toggleCell(target.className, target.classList.contains("active"));
  };

  const handleMouseUp = () => {
    dragMouse(false);
  };

  const handleMouseDrag = ({ target }) => {
    if (mouseDrag) {
      toggleCell(target.className, target.classList.contains("active"));
    }
  };

  return (
    <table
      className="test-table"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOver={handleMouseDrag}
    >
      <tbody>{createGameboard(4, 4)}</tbody>
    </table>
  );
};

const mapStateToProps = ({ gameboard, mouseDrag }) => ({
  gameboard,
  mouseDrag
});

export default connect(mapStateToProps, actions)(Gameboard);
