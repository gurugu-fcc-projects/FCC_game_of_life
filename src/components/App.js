import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import InfoBar from "./InfoBar";
import Gameboard from "./Gameboard";
import GameEngine from "./GameEngine";
import Interface from "./Interface";
import Settings from "./Settings";
import * as actions from "../actions";

class App extends Component {
  // componentDidMount() {
  //   document.addEventListener("keyup", this.startStop);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener("keyup", this.startStop);
  // }

  startStop = event => {
    if (event.keyCode === 32) {
      this.props.startStopGame(!this.props.isPlaying);
    }
  };

  handleMouseUp = () => {
    this.props.dragMouse(false);
  };

  render() {
    const { isPlaying } = this.props;

    return (
      <div
        className="app"
        onMouseUp={this.handleMouseUp}
        onKeyUp={this.startStop}
      >
        {isPlaying && <GameEngine />}
        <div>
          <Settings />
          <Interface />
        </div>
        <Gameboard />
        <InfoBar />
      </div>
    );
  }
}

App.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  dragMouse: PropTypes.func.isRequired,
  startStopGame: PropTypes.func.isRequired
};

const mapStateToProps = ({ isPlaying }) => ({
  isPlaying
});

export default connect(mapStateToProps, actions)(App);
