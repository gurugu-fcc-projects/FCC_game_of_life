import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../actions";

class Gameboard extends Component {
  createGameboard = (width, height) => {
    let gameboard = [];

    for (let i = 0; i < height; i++) {
      let row = [];
      for (let j = 0; j < width; j++) {
        const cellName = `${i}-${j}`;

        row.push(
          <div
            key={j}
            className={`${cellName}${
              this.props.gameboard[cellName].alive ? " alive" : ""
            }`}
          />
        );
      }

      gameboard.push(
        <div key={i} className="row">
          {row}
        </div>
      );
    }

    return gameboard;
  };

  handleMouseDown = ({ target }) => {
    this.props.dragMouse(true);
    this.props.toggleCell(target.classList.item(0));
  };

  handleMouseOver = ({ target }) => {
    if (this.props.mouseDrag) {
      this.props.toggleCell(target.classList.item(0));
    }
  };

  handleDragStart = ({ target }) => {
    console.log("dragging start", target);
  };

  handleDragEnd = ({ target }) => {
    console.log("dragging send", target);
  };

  render() {
    return (
      <div
        onMouseDown={this.handleMouseDown}
        onMouseOver={this.handleMouseOver}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
        className="gameboard"
      >
        {this.createGameboard(20, 20)}
      </div>
    );
  }
}

Gameboard.propTypes = {
  gameboard: PropTypes.object.isRequired,
  mouseDrag: PropTypes.bool.isRequired,
  dragMouse: PropTypes.func.isRequired,
  toggleCell: PropTypes.func.isRequired
};

const mapStateToProps = ({ gameboard, mouseDrag }) => ({
  gameboard,
  mouseDrag
});

export default connect(mapStateToProps, actions)(Gameboard);
