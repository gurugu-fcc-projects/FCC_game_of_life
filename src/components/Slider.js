import "rc-slider/assets/index.css";
import React from "react";
import PropTypes from "prop-types";
import Slider from "rc-slider";

import { colors400 } from "../utils/data";

const sliderStyle = {
  display: "inline-block",
  width: "70%"
};

const trackStyle = {
  backgroundColor: "rgb(247, 147, 129)",
  height: 10
};

const handleStyle = {
  backgroundColor: "#fff",
  border: "none",
  height: 28,
  width: 28,
  marginLeft: -14,
  marginTop: -9
};

const railStyle = {
  backgroundColor: "rgb(201, 201, 201)",
  height: 10
};

const SliderComponent = ({ title, min, max, value, handleChange }) => {
  const valueComponent = () => {
    if (title === "Color") {
      return (
        <div
          className="value color"
          style={{ backgroundColor: colors400[value] }}
        />
      );
    }

    return <div className="value">{value}</div>;
  };

  return (
    <div className="slider">
      <div style={sliderStyle}>
        <h4>{title}</h4>
        <Slider
          min={min}
          max={max}
          value={value}
          trackStyle={trackStyle}
          handleStyle={handleStyle}
          railStyle={railStyle}
          onChange={handleChange}
        />
      </div>
      {valueComponent()}
    </div>
  );
};

Slider.propTypes = {
  title: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func
};

export default SliderComponent;
