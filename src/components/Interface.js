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

  return (
    <div className="interface">
      <button className="interface__button" onClick={handleRunStopGame}>
        run
      </button>
      <button className="interface__button">stop</button>
      <button className="interface__button">clear</button>
      <button className="interface__button">random</button>
      <button className="interface__button">size</button>
      <button className="interface__button">speed</button>
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
