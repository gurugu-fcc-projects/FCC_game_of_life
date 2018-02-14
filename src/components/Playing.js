import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../actions";

class Playing extends Component {
  componentWillUpdate() {
    //=== set var to check if there are any alive cells
    let allDead = true;

    for (let cell in this.props.gameboard) {
      if (this.props.gameboard[cell].alive) {
        allDead = false;
      }
    }

    if (allDead) {
      console.log("everyone is dead --- stopping");
      this.props.stopGame();
    }
  }

  isAlive = (cell, gameboard) => {
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

  checkGameboard = gameboard => {
    //=== update gameboard with new dead/alive status
    const updatedGameboard = {};

    for (let cell in gameboard) {
      updatedGameboard[cell] = {
        alive: this.isAlive(gameboard[cell], gameboard),
        neighbours: gameboard[cell].neighbours
      };
    }

    this.props.runGame(updatedGameboard);
  };

  componentDidMount() {
    console.log("Playing - componentDidMount");
    const interval = setInterval(
      () => this.checkGameboard(this.props.gameboard),
      1000
    );
    this.props.setIntervalId(interval);
  }

  componentWillUnmount() {
    console.log("clearing interval");
    clearInterval(this.props.intervalId);
  }

  render() {
    return <div />;
  }
}

Playing.propTypes = {
  gameboard: PropTypes.object.isRequired,
  intervalId: PropTypes.number.isRequired,
  setIntervalId: PropTypes.func.isRequired,
  runGame: PropTypes.func.isRequired,
  stopGame: PropTypes.func.isRequired
};

const mapStateToProps = ({ gameboard, intervalId }) => ({
  gameboard,
  intervalId
});

export default connect(mapStateToProps, actions)(Playing);
