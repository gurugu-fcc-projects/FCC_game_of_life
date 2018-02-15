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
      <button onClick={handleRunStopGame}> Run | Stop </button>
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
