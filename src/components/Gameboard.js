import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../actions";

class Gameboard extends Component {
  constructor(props) {
    super(props);

    this.throttledDoSomething = _.throttle(this.throttledDoSomething, 400);
  }

  createGameboard = size => {
    let newGameboard = [];

    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
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

      newGameboard.push(
        <div key={i} className="row">
          {row}
        </div>
      );
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

  // const handleTouchMove = event => {
  //   return _.debounce(console.log("eee"), 100);
  //   // console.log("handleTouchMove");
  //   // console.log("clientX:", event.targetTouches[0].clientX);
  //   console.log("clientY:", event.targetTouches[0].clientY);
  // };

  doSomething = event => {
    // const x = event.targetTouches[0].clientX;
    // const y = event.targetTouches[0].clientY;
    // const gameboardElement = document.querySelector(".gameboard");
    this.throttledDoSomething(event.targetTouches[0].clientX);
  };

  throttledDoSomething = clientX => console.log("clientX", clientX);

  render() {
    return (
      <div
        onMouseDown={this.handleMouseDown}
        onMouseOver={this.handleMouseOver}
        onTouchMove={this.doSomething.bind(this)}
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
