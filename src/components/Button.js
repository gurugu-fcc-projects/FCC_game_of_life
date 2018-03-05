import { Component } from "react";

const Button = ({ title, operation }) => {
  return (
    <button
      className="interface__button"
      title={title}
      onClick={operation}
    >
      <i className="interface__icon ion-navicon-round" />
    </button>
  );
};

export default Button;
