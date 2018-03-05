import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "../actions";
import { showHideSettings } from "../utils/showHideSettings";

const Interface = ({ isPlaying, startStopGame }) => {
  return (
    <div className="interface">
      <button
        className="interface__button"
        title="Settings"
        onClick={showHideSettings}
      >
        <i className="interface__icon ion-navicon-round" />
      </button>
      <button
        className="interface__button"
        title={isPlaying ? "Pause" : "Start"}
        onClick={() => startStopGame(!isPlaying)}
      >
        <i
          className={`interface__icon ${isPlaying ? "ion-pause" : "ion-play"}`}
        />
      </button>
      <button className="interface__button" title="Clear">
        <i className="interface__icon ion-trash-a" />
      </button>
      <button className="interface__button" title="Random">
        <i className="interface__icon ion-shuffle" />
      </button>
    </div>
  );
};

Interface.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  startStopGame: PropTypes.func.isRequired
};

const mapStateToProps = ({ isPlaying }) => ({
  isPlaying
});

export default connect(mapStateToProps, actions)(Interface);
