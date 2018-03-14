import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../actions";

const Gameboard = ({ gameboard, mouseDrag, size, dragMouse, toggleCell }) => {
  const createGameboard = size => {
    let newGameboard = [];

    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        const cellName = `${i}-${j}`;

        row.push(
          <div
            key={j}
            className={`${cellName}${
              gameboard[cellName].alive ? " alive" : ""
            }`}
          />
        );
      }

      newGameboard.push(
        <div key={i} className="row">
          {row}
        </div>
      );
    }

    return newGameboard;
  };

  const handleMouseDown = ({ target }) => {
    dragMouse(true);
    toggleCell(target.classList.item(0));
  };

  const handleMouseOver = ({ target }) => {
    if (mouseDrag) {
      toggleCell(target.classList.item(0));
    }
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseOver={handleMouseOver}
      className="gameboard"
    >
      {createGameboard(size)}
    </div>
  );
};

Gameboard.propTypes = {
  gameboard: PropTypes.object.isRequired,
  mouseDrag: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
  dragMouse: PropTypes.func.isRequired,
  toggleCell: PropTypes.func.isRequired
};

const mapStateToProps = ({ gameboard, mouseDrag, variables: { size } }) => ({
  gameboard,
  mouseDrag,
  size
});

export default connect(mapStateToProps, actions)(Gameboard);
