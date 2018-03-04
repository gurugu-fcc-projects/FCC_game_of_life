import { Component } from "react";

const Button = () => {
  return (
    <button
      className="interface__button"
      title="Settings"
      onClick={handleSettingsClick}
    >
      <i className="interface__icon ion-navicon-round" />
    </button>
  );
};

export default Button;
