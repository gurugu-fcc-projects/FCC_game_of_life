import React, { Component } from "react";
import { connect } from "react-redux";

import Gameboard from "./Gameboard";
import * as actions from "../actions";
import "../styles/App.css";

class App extends Component {
  componentDidMount() {
    this.props.populateGameboard(4);
  }

  componentDidUpdate() {
    if (this.props.isPlaying) {
      setTimeout(this.props.gameTurn, 1000);
    }
  }

  handleRunStopGame = () => {
    this.props.runStopGame();
  };

  render() {
    return (
      <div className="App">
        <Gameboard />
        <button onClick={this.handleRunStopGame}> Test </button>{" "}
      </div>
    );
  }
}

const mapStateToProps = ({ gameboard, isPlaying }) => ({
  gameboard,
  isPlaying
});

export default connect(mapStateToProps, actions)(App);
