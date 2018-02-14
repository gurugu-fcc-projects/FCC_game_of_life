import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../actions";

class Gameboard extends Component {
  createGameboard = (width, height) => {
    if (this.props.gameboard) {
      let gameboardTable = [];

      for (let i = 0; i < height; i++) {
        let row = [];
        for (let j = 0; j < width; j++) {
          const cellName = `${i}-${j}`;

          row.push(
            <td
              key={j}
              className={
                cellName +
                (this.props.gameboard[cellName].alive ? " active" : "")
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

  handleMouseDown = ({ target }) => {
    this.props.dragMouse(true);
    //=== prevent clicking on surrounding table
    if (target.classList.contains("test-table")) {
      return false;
    }

    this.props.toggleCell(
      target.className,
      target.classList.contains("active")
    );
  };

  handleMouseOver = ({ target }) => {
    if (this.props.mouseDrag) {
      //=== prevent clicking on surrounding table
      if (target.classList.contains("test-table")) {
        return false;
      }

      this.props.toggleCell(
        target.className,
        target.classList.contains("active")
      );
    }
  };

  render() {
    return (
      <table
        className="test-table"
        onMouseDown={this.handleMouseDown}
        onMouseOver={this.handleMouseOver}
      >
        <tbody>{this.createGameboard(4, 4)}</tbody>
      </table>
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
