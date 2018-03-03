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
    document.querySelector(".settings").classList.toggle("open");
  };

  return (
    <div className="interface">
      <button
        className="interface__button"
        title="Settings"
        onClick={handleSettingsClick}
      >
        <i className="interface__icon ion-navicon-round" />
      </button>
      <button className="interface__button" title="Play/Stop">
        {isPlaying ? (
          <i className="interface__icon ion-pause" />
        ) : (
          <i className="interface__icon ion-play" />
        )}
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
  stopGame: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired
};

const mapStateToProps = ({ isPlaying }) => ({
  isPlaying
});

export default connect(mapStateToProps, actions)(Interface);
