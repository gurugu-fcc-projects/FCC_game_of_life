import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import StatusBar from "./StatusBar";
import Gameboard from "./Gameboard";
import Playing from "./Playing";
import * as actions from "../actions";

class App extends Component {
  handleRunStopGame = () => {
    if (this.props.isPlaying) {
      this.props.stopGame();
    } else {
      this.props.startGame();
    }
  };

  handleMouseUp = () => {
    this.props.dragMouse(false);
  };

  render() {
    const { isPlaying } = this.props;

    return (
      <div className="App" onMouseUp={this.handleMouseUp}>
        <StatusBar />
        {isPlaying && <Playing />}
        <Gameboard />
        <button onClick={this.handleRunStopGame}> Run | Stop </button>{" "}
      </div>
    );
  }
}

App.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  stopGame: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  dragMouse: PropTypes.func.isRequired
};

const mapStateToProps = ({ isPlaying }) => ({
  isPlaying
});

export default connect(mapStateToProps, actions)(App);
