import React from "react";

class GameboardCell extends React.PureComponent {
  render() {
    const { size, alive, rowNumber, cellNumber } = this.props;

    return (
      <div
        className={`${rowNumber}-${cellNumber}${alive ? " alive" : ""}${
          rowNumber === 0 ? " top" : ""
        }${cellNumber === 0 ? " left" : ""}${
          rowNumber === size - 1 ? " bottom" : ""
        }${cellNumber === size - 1 ? " right" : ""}`}
      />
    );
  }
}

export default GameboardCell;
