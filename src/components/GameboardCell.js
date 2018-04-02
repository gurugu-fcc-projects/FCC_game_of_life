import React from "react";

class GameboardCell extends React.PureComponent {
  render() {
    const { size, cellName, isAlive, rowNum, colNum } = this.props;

    if (isAlive) {
      return (
        <div
          className={`${cellName}$ alive ${rowNum === 0 ? " top" : ""}${
            colNum === 0 ? " left" : ""
          }${rowNum === size ? " bottom" : ""}${
            colNum === size ? " right" : ""
          }`}
        />
      );
    } else {
      return (
        <div
          className={`${cellName}${rowNum === 0 ? " top" : ""}${
            colNum === 0 ? " left" : ""
          }${rowNum === size ? " bottom" : ""}${
            colNum === size ? " right" : ""
          }`}
        />
      );
    }
  }
}

export default GameboardCell;
