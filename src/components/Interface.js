import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "../actions";

const Interface = ({ isPlaying, startGame, stopGame }) => {
  const handleRunStopGame = () => {
    if (isPlaying) {
      stopGame();
    } else {
      startGame();
    }
  };

  const handleSettingsClick = () => {
    document.getElementById("interface").classList.toggle("open");
  };

  return (
    <div className="interface" id="interface">
      <button
        className="interface__button button-1"
        title="Settings"
        onClick={handleSettingsClick}
      >
        <i className="interface__icon ion-ios-keypad" />
      </button>
      <button className="interface__button button-2" title="button">
        <i className="interface__icon ion-ios-keypad" />
      </button>
      <button className="interface__button button-3" title="button">
        <i className="interface__icon ion-ios-keypad" />
      </button>
    </div>
  );
};

Interface.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  stopGame: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired
};

const mapStateToProps = ({ isPlaying }) => ({
  isPlaying
});

export default connect(mapStateToProps, actions)(Interface);
