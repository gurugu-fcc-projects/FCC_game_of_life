import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "../actions";
import { checkDeadAlive } from "../utils/updateGameboard";

class GameEngine extends Component {
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

  componentDidMount() {
    const interval = setInterval(
      () => this.props.runGame(checkDeadAlive(this.props.gameboard)),
      1000
    );
    this.props.setIntervalId(interval);
  }

  componentWillUnmount() {
    clearInterval(this.props.intervalId);
  }

  render() {
    return <div className="game-engine" />;
  }
}

GameEngine.propTypes = {
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

export default connect(mapStateToProps, actions)(GameEngine);
