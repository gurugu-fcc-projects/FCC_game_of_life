import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Playing extends Component {
  componentDidMount() {
    console.log("running componentDidMount in Playing");
    const interval = setInterval(this.props.gameTurn, 1000);
    this.props.setInterval(interval);
  }

  componentWillUnmount() {
    console.log("running componentWillUnmount in Playing");
    console.log("Clearing interval ID:", this.props.intervalId);
    clearInterval(this.props.intervalId);
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = ({ intervalId }) => ({
  intervalId
});

export default connect(mapStateToProps, actions)(Playing);
