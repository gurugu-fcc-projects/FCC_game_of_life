import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import StatusBar from "./StatusBar";
import Gameboard from "./Gameboard";
import GameEngine from "./GameEngine";
import Interface from "./Interface";
import * as actions from "../actions";

class App extends Component {
  componentDidMount() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const maxSquaresH = Math.trunc(windowWidth / 38);
    const squareSide = windowWidth / maxSquaresH;
    const avaiableWindowHeight = windowHeight - 22;
    const maxSquaresV = Math.trunc(avaiableWindowHeight / squareSide);
    const verticalSpaceLeft = avaiableWindowHeight - maxSquaresV * squareSide;

    document.querySelector(
      ".status-bar"
    ).style.paddingBottom = `${verticalSpaceLeft + 4}px`;

    console.log("window.innerHeight", windowHeight);
    console.log("window.innerWidth", windowWidth);
    console.log("max horizontal squares", maxSquaresH);
    console.log("square side size", squareSide);
    console.log("available window height", avaiableWindowHeight);
    console.log("max vertical squares", maxSquaresV);
    console.log("vertical space left", verticalSpaceLeft);
  }

  handleMouseUp = () => {
    this.props.dragMouse(false);
  };

  render() {
    const { isPlaying } = this.props;

    return (
      <div className="app" onMouseUp={this.handleMouseUp}>
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
