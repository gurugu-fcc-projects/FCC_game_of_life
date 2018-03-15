import React, {
  Component
} from "react";
import PropTypes from "prop-types";
import {
  connect
} from "react-redux";

import * as actions from "../actions";
import {
  checkDeadAlive
} from "../utils/updateGameboard";

class GameEngine extends Component {
  componentWillUpdate(nextProps) {
    //=== stop game if all cells are dead
    let allDead = true;

    for (let cell in this.props.gameboard) {
      if (this.props.gameboard[cell].alive) {
        allDead = false;
      }
    }

    if (allDead) {
      this.props.startStopGame(false);
    }

    //=== update game speed
    if (nextProps.speed !== this.props.speed) {
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
      () => this.props.runGame(checkDeadAlive(this.props.gameboard)),
      1100 - this.props.speed * 100
    );
    this.props.setIntervalId(interval);
  }

  render() {
    return <div className = "game-engine" / > ;
  }
}

GameEngine.propTypes = {
  gameboard: PropTypes.object.isRequired,
  intervalId: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  setIntervalId: PropTypes.func.isRequired,
  startStopGame: PropTypes.func.isRequired
};

const mapStateToProps = ({
  gameboard,
  intervalId,
  variables: {
    speed
  }
}) => ({
  gameboard,
  intervalId,
  speed
});

export default connect(mapStateToProps, actions)(GameEngine);