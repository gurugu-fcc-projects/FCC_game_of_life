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
    // const minSquaresH = 16;
    // const minSquaresV = 8;
    const minSquareSize = 20;
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const windowMinSide = Math.min(windowHeight, windowWidth);
    const maxSquaresInMinSide = Math.trunc(windowMinSide / minSquareSize);
    // const maxSquaresH = Math.trunc(windowWidth / 38);
    const squareSide = windowMinSide / maxSquaresInMinSide;
    const avaiableWindowHeight = windowHeight - windowMinSide;
    // const maxSquaresV = Math.trunc(avaiableWindowHeight / squareSide);
    // const verticalSpaceLeft = avaiableWindowHeight - minSquaresV * squareSide;

    // document.querySelector(
    //   ".status-bar"
    // ).style.paddingBottom = `${verticalSpaceLeft + 4}px`;

    // console.log("window.innerHeight", windowHeight);
    // console.log("window.innerWidth", windowWidth);
    // console.log("max horizontal squares", maxSquaresH);
    console.log("number of squares", maxSquaresInMinSide);
    console.log("available window height", avaiableWindowHeight);
    // console.log("max vertical squares", maxSquaresV);
    // console.log("vertical space left", verticalSpaceLeft);
  }

  handleMouseUp = () => {
    this.props.dragMouse(false);
  };

  render() {
    const { isPlaying } = this.props;

    return (
      <div className="app" onMouseUp={this.handleMouseUp}>
        {/* <StatusBar /> */}
        <div className="element-before">
          <div className="controls">C</div>
        </div>
        {isPlaying && <GameEngine />}
        <Gameboard />
        <div className="element-after" />
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
