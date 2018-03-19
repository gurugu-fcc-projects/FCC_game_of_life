import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "../actions";
import { showHideSettings } from "../utils/showHideSettings";

const Interface = ({
  isPlaying,
  startStopGame,
  clearGameboard,
  randomizeGameboard
}) => {
  return (
    <div className="interface">
      <button
        id="settings_button"
        className="interface__button"
        title="Settings"
        onClick={showHideSettings}
      >
        <i className="interface__icon ion-navicon-round" />
      </button>
      <button
        id="random_button"
        className="interface__button"
        title="Random"
        onClick={randomizeGameboard}
      >
        <i className="interface__icon ion-shuffle" />
      </button>
      <button
        id="clear_button"
        className="interface__button"
        title="Clear"
        onClick={clearGameboard}
      >
        <i className="interface__icon ion-trash-a" />
      </button>
      <button
        id="start_stop_button"
        className="interface__button"
        title={isPlaying ? "Pause" : "Start"}
        onClick={() => startStopGame(!isPlaying)}
      >
        <i
          className={`interface__icon ${isPlaying ? "ion-pause" : "ion-play"}`}
        />
      </button>
    </div>
  );
};

Interface.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  startStopGame: PropTypes.func.isRequired,
  clearGameboard: PropTypes.func.isRequired,
  randomizeGameboard: PropTypes.func.isRequired
};

const mapStateToProps = ({ isPlaying }) => ({
  isPlaying
});

export default connect(mapStateToProps, actions)(Interface);
