import React, { Component } from "react";
import { connect } from "react-redux";

import Gameboard from "./Gameboard";
import * as actions from "../actions";
import "../styles/App.css";

class App extends Component {
  componentDidMount() {
    this.props.populateGameboard(4);
  }

  handleRunStopGame = () => {
    this.props.runStopGame();
  };

  render() {
    const { gameStatus, turnsInterval, gameTurn, toggleInterval } = this.props;

    if (gameStatus) {
      clearInterval(turnsInterval);
      toggleInterval(setInterval(gameTurn, 1000));
    } else {
      clearInterval(turnsInterval);
    }
    return (
      <div className="App">
        <Gameboard />
        <button onClick={this.handleRunStopGame}>Test</button>
      </div>
    );
  }
}

const mapStateToProps = ({ gameStatus, turnsInterval }) => ({
  gameStatus,
  turnsInterval
});

export default connect(mapStateToProps, actions)(App);
