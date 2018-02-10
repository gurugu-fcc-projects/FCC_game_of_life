import React, { Component } from "react";
import "../styles/App.css";

import { createGameboard, populateGameboard } from "../utils/createGameboard";
import { checkGameboard } from "../tmp";

class App extends Component {
  state = {
    gameboard: null,
    isMouseDrag: false
  };

  componentDidMount() {
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

  render() {
    const board = {
      "0-0": { alive: true, neighbours: ["3-3", "3-0", "3-1", "0-3", "0-1"] },
      "3-3": { alive: false, neighbours: ["3-3", "3-0", "3-1", "0-3", "0-1"] },
      "3-0": { alive: false, neighbours: ["3-3", "3-0", "3-1", "0-3", "0-1"] },
      "3-1": { alive: false, neighbours: ["3-3", "3-0", "3-1", "0-3", "0-1"] },
      "0-3": { alive: false, neighbours: ["3-3", "3-0", "3-1", "0-3", "0-1"] },
      "0-1": { alive: false, neighbours: ["3-3", "3-0", "3-1", "0-3", "0-1"] }
    };

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
        <button onClick={() => console.log(checkGameboard(board))}>Test</button>
      </div>
    );
  }
}

export default App;
