import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../actions";

class Gameboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevCell: ""
    };

    this.throttleTouchMove = _.throttle(this.throttleTouchMove.bind(this), 20);
  }

  createGameboard = size => {
    // const gameboard = document.querySelector(".gameboard"); 
    // gameboard.style.setProperty("--size", size);

    let newGameboard = [];

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const cellName = `${i}-${j}`;

        newGameboard.push(
          <div
            key={cellName}
            className={`${cellName}${
              this.props.gameboard[cellName].alive ? " alive" : ""
              }`}
          />
        );
      }
    }

    return newGameboard;
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
      <div
        onMouseDown={this.handleMouseDown}
        onMouseOver={this.handleMouseOver}
        onTouchMove={this.handleTouchMove}
        className="gameboard"
      >
        {this.createGameboard(this.props.size)}
      </div>
    );
  }
}

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
