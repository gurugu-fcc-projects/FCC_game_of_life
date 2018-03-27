import React from "react";

class GameboardCell extends React.PureComponent {
  render() {
    const { size, cellName, alive, i, j } = this.props;

    return (
      <div
        className={`${cellName}${alive ? " alive" : ""}${
          i === 0 ? " top" : ""
        }${j === 0 ? " left" : ""}${i === size - 1 ? " bottom" : ""}${
          j === size - 1 ? " right" : ""
        }`}
      />
    );
  }
}

export default GameboardCell;
