import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "../actions";

class GameEngine extends Component {
  componentWillUpdate(nextProps) {
    //=== stop game if all cells are dead
    // const stillAlive = this.props.gameboard.some(row => row.some(cell => cell));

    // if (!stillAlive) {
    //   console.log("All dead --- stopping...");
    //   this.props.startStopGame(false);
    // }

    //=== update game speed
    if (nextProps.speed !== this.props.speed) {
      console.log("updating speed");
      clearInterval(this.props.intervalId);
      this.startGame();
    }
  }

  componentDidMount() {
    this.startGame();
  }

  componentWillUnmount() {
    clearInterval(this.props.intervalId);
  }

  startGame() {
    const interval = setInterval(
      this.props.runGame,
      1100 - this.props.speed * 100
    );
    this.props.setIntervalId(interval);
  }

  render() {
    return <div className="game-engine" />;
  }
}

GameEngine.propTypes = {
  gameboard: PropTypes.object.isRequired,
  intervalId: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  runGame: PropTypes.func.isRequired,
  setIntervalId: PropTypes.func.isRequired,
  startStopGame: PropTypes.func.isRequired
};

const mapStateToProps = ({ gameboard, intervalId, variables: { speed } }) => ({
  gameboard,
  intervalId,
  speed
});

export default connect(mapStateToProps, actions)(GameEngine);
