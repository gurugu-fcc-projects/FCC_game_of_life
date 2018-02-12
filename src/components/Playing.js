import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../actions";

class Playing extends Component {
  componentDidMount() {
    const interval = setInterval(this.props.gameTurn, 1000);
    this.props.setIntervalId(interval);
  }

  componentWillUnmount() {
    clearInterval(this.props.intervalId);
  }

  render() {
    return <div />;
  }
}

Playing.propTypes = {
  intervalId: PropTypes.number.isRequired,
  setIntervalId: PropTypes.func.isRequired,
  gameTurn: PropTypes.func.isRequired
};

const mapStateToProps = ({ intervalId }) => ({
  intervalId
});

export default connect(mapStateToProps, actions)(Playing);
