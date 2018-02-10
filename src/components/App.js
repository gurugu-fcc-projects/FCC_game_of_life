import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import "../styles/App.css";

import Gameboard from "./Gameboard";
import { checkGameboard } from "../tmp";

class App extends Component {
  componentDidMount() {
    this.props.populateGameboard(4);
  }

  handleCheckGameboard = () => {
    checkGameboard(this.props.gameboard);
  };

  render() {
    return (
      <div className="App">
        <Gameboard />
        <button onClick={this.handleCheckGameboard}>Test</button>
      </div>
    );
  }
}

const mapStateToProps = ({ gameboard }) => ({
  gameboard
});

export default connect(mapStateToProps, actions)(App);
