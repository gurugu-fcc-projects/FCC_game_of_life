import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import "../styles/App.css";

import { createGameboard } from "../utils/createGameboard";
import { checkGameboard } from "../tmp";

class App extends Component {
  state = {
    gameboard: null,
    isMouseDrag: false
  };

  componentDidMount() {
    this.props.populateGameboard(4);
    this.setState({ gameboard: createGameboard(4, 4) });
  }

  createTable(width, height) {
    let table = [];

    for (let i = 0; i < height; i++) {
      let row = [];
      for (let j = 0; j < width; j++) {
        row.push(
          <td key={j} className={`cell-${i}-${j}`}>
            {" "}
            {`cell-${i}-${j}`}{" "}
          </td>
        );
      }

      table.push(<tr key={i}>{row}</tr>);
    }

    return table;
  }

  handleMouseDown = event => {
    this.setState({
      isMouseDrag: true
    });
    event.target.classList.toggle("active");
  };

  handleMouseUp = event => {
    this.setState({
      isMouseDrag: false
    });
  };

  handleMouseDrag = event => {
    if (this.state.isMouseDrag) {
      event.target.classList.toggle("active");
    }
  };

  handleCheckGameboard = () => {
    checkGameboard(this.props.gameboard);
  };

  render() {
    return (
      <div className="App">
        <table
          className="test-table"
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseOver={this.handleMouseDrag}
        >
          <tbody>{this.state.gameboard}</tbody>
        </table>
        <button onClick={this.handleCheckGameboard}>Test</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameboard: state.gameboard
});

export default connect(mapStateToProps, actions)(App);
