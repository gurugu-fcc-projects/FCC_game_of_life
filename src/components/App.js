import React, { Component } from "react";
import { connect } from "react-redux";

import Gameboard from "./Gameboard";
import Playing from "./Playing";
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
    const { isPlaying } = this.props;

    return (
      <div className="App">
        {isPlaying && <Playing />}
        <Gameboard />
        <button onClick={this.handleRunStopGame}> Run | Stop </button>{" "}
      </div>
    );
  }
}

const mapStateToProps = ({ gameboard, isPlaying }) => ({
  gameboard,
  isPlaying
});

export default connect(mapStateToProps, actions)(App);
