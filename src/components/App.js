import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Gameboard from "./Gameboard";
import Playing from "./Playing";
import * as actions from "../actions";
import "../styles/App.css";

class App extends Component {
  componentWillMount() {
    this.props.populateGameboard(4);
  }

  handleRunStopGame = () => {
    if (this.props.isPlaying) {
      this.props.stopGame();
    } else {
      this.props.startGame();
    }
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

App.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  stopGame: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired
};

const mapStateToProps = ({ isPlaying }) => ({
  isPlaying
});

export default connect(mapStateToProps, actions)(App);
