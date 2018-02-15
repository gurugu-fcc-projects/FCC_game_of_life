import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const StatusBar = ({ generation }) => {
  return (
    <div className="status-bar">
      <div className="status-bar__generation">Generation: {generation}</div>
      <div className="status-bar__github-link">See source code in Github</div>
    </div>
  );
};

StatusBar.propTypes = {
  generation: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  generation: state.generation
});

export default connect(mapStateToProps)(StatusBar);
