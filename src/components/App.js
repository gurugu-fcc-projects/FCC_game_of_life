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
  handleMouseUp = () => {
    this.props.dragMouse(false);
  };

  render() {
    const { isPlaying } = this.props;

    return (
      <div className="app" onMouseUp={this.handleMouseUp}>
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
  dragMouse: PropTypes.func.isRequired
};

const mapStateToProps = ({ isPlaying }) => ({
  isPlaying
});

export default connect(mapStateToProps, actions)(App);
