import React, { Component } from "react";
import "./App.css";

import { createGameboard } from "./tmp";

class App extends Component {
  state = {
    isMouseDrag: false
  };

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
    return (
      <div className="App">
        <table
          className="test-table"
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseOver={this.handleMouseDrag}
        >
          <tbody>{this.createTable(4, 4)}</tbody>
        </table>
        <button onClick={() => console.log(createGameboard(4))}>Test</button>
      </div>
    );
  }
}

export default App;
