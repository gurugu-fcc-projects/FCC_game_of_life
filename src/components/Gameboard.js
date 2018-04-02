import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "../actions";
import GameboardCell from "./GameboardCell";

class Gameboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevCell: ""
    };

    this.throttleTouchMove = _.throttle(this.throttleTouchMove.bind(this), 500);
  }

  componentDidMount() {
    this.resize();
    window.addEventListener("resize", this.resize, false);
  }

  componentWillUpdate(nextProps) {
    //=== update Gameboard grid size based on new size value
    const gameboard = document.querySelector(".gameboard");
    gameboard.style.setProperty("--gameboardSize", nextProps.size);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize, false);
  }

  resize() {
    const gameboardElement = document.querySelector(".gameboard-outer"),
      size = Math.min(
        gameboardElement.offsetWidth,
        gameboardElement.offsetHeight
      );

    gameboardElement.style.setProperty("--size", `${size - 40}px`);
  }

  createGameboard = gameboard => {
    const size = gameboard.length;

    return gameboard.map((row, rowNumber) => [
      ...row.map((cell, cellNumber) => {
        return (
          // <GameboardCell
          //   key={`${rowNumber}-${cellNumber}`}
          //   size={size}
          //   alive={cell}
          //   rowNumber={rowNumber}
          //   cellNumber={cellNumber}
          // />
          <div
            key={`${rowNumber}-${cellNumber}`}
            className={`${rowNumber}-${cellNumber}${cell ? " alive" : ""}${
              rowNumber === 0 ? " top" : ""
            }${cellNumber === 0 ? " left" : ""}${
              rowNumber === size - 1 ? " bottom" : ""
            }${cellNumber === size - 1 ? " right" : ""}`}
          />
          // <div
          //   key={`${rowNumber}-${cellNumber}`}
          //   className={`${rowNumber}-${cellNumber}${
          //     rowNumber === 0 ? " top" : ""
          //   }${cellNumber === 0 ? " left" : ""}${
          //     rowNumber === size - 1 ? " bottom" : ""
          //   }${cellNumber === size - 1 ? " right" : ""}`}
          // />
        );
      })
    ]);
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

  handleTouchMove = event => {
    this.throttleTouchMove(event.targetTouches[0]);
  };

  throttleTouchMove = touchData => {
    const x = touchData.clientX;
    const y = touchData.clientY;
    const gameboardRect = document
      .querySelector(".gameboard")
      .getBoundingClientRect();

    //=== check coordinates only for gameboard rectangle
    if (
      x > gameboardRect.x &&
      y > gameboardRect.y &&
      x < gameboardRect.x + gameboardRect.width &&
      y < gameboardRect.y + gameboardRect.height
    ) {
      const touchedElement = document.elementFromPoint(x, y).classList.item(0);
      //=== check if current cell is the same as the previous one
      //=== this prevents continuous toggling of the same

      if (this.state.prevCell !== touchedElement) {
        this.props.toggleCell(touchedElement);
        this.setState({ prevCell: touchedElement });
      }

      return;
    }
  };

  render() {
    return (
      <div className="gameboard-outer">
        <div
          onMouseDown={this.handleMouseDown}
          onMouseOver={this.handleMouseOver}
          onTouchMove={this.handleTouchMove}
          className="gameboard"
        >
          {this.createGameboard(this.props.gameboard)}
        </div>
      </div>
    );
  }
}

Gameboard.propTypes = {
  gameboard: PropTypes.array.isRequired,
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
