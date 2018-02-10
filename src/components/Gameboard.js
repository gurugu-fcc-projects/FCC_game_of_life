import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const Gameboard = ({ mouseDrag, dragMouse, toggleCell }) => {
  const createGameboard = (width, height) => {
    let gameboard = [];

    for (let i = 0; i < height; i++) {
      let row = [];
      for (let j = 0; j < width; j++) {
        row.push(
          <td key={j} className={`${i}-${j}`}>
            {" "}
            {`cell-${i}-${j}`}{" "}
          </td>
        );
      }

      gameboard.push(<tr key={i}>{row}</tr>);
    }

    return gameboard;
  };

  const checkCell = target => {
    target.classList.toggle("active");

    if (target.classList.contains("active")) {
      toggleCell(target.className, true);
    } else {
      toggleCell(target.className, false);
    }
  };

  const handleMouseDown = event => {
    dragMouse(true);
    checkCell(event.target);
  };

  const handleMouseUp = event => {
    dragMouse(false);
  };

  const handleMouseDrag = event => {
    console.log("dragging...");
    if (mouseDrag) {
      checkCell(event.target);
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

const mapStateToProps = ({ mouseDrag }) => ({
  mouseDrag
});

export default connect(mapStateToProps, actions)(Gameboard);
