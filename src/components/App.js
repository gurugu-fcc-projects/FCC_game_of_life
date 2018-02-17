import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import StatusBar from "./StatusBar";
import Gameboard from "./Gameboard";
import GameEngine from "./GameEngine";
import Interface from "./Interface";
import * as actions from "../actions";

class App extends Component {
  handleMouseUp = () => {
    this.props.dragMouse(false);
  };

  render() {
    const { isPlaying } = this.props;
    console.log("window.innerHeight", window.innerHeight);
    console.log("window.innerWidth", window.innerWidth);

    return (
      <div className="App" onMouseUp={this.handleMouseUp}>
        <StatusBar />
        {isPlaying && <GameEngine />}
        <Gameboard />
        {/* <Interface /> */}
      </div>
    );
  }
}

App.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  dragMouse: PropTypes.func.isRequired
};

const mapStateToProps = ({ isPlaying }) => ({
  isPlaying
});

export default connect(mapStateToProps, actions)(App);
