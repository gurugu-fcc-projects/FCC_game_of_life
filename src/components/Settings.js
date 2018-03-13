import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Slider from "rc-slider";

import * as actions from "../actions";
import { showHideSettings } from "../utils/showHideSettings";

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

const Settings = ({
  variables: { size, speed, color },
  changeSize,
  changeSpeed,
  changeColor
}) => {
  return (
    <Fragment>
      <div id="modal" onClick={showHideSettings} />
      <aside id="settings">
        <button className="button" title="Close" onClick={showHideSettings}>
          <i className="icon ion-arrow-left-c" />
        </button>
        <div className="sliders">
          <div className="slider">
            <div style={sliderStyle}>
              <h4>Size</h4>
              <Slider
                min={4}
                max={40}
                value={size}
                trackStyle={trackStyle}
                handleStyle={handleStyle}
                railStyle={railStyle}
                onChange={changeSize}
              />
            </div>
            <div className="value">{size}</div>
          </div>
          <div className="slider">
            <div style={sliderStyle}>
              <h4>Speed</h4>
              <Slider
                min={1}
                max={20}
                value={speed}
                trackStyle={trackStyle}
                handleStyle={handleStyle}
                railStyle={railStyle}
                onChange={changeSpeed}
              />
            </div>
            <div className="value">{speed}</div>
          </div>
          <div className="slider">
            <div style={sliderStyle}>
              <h4>Cell Color</h4>
              <Slider
                min={1}
                max={20}
                value={color}
                trackStyle={trackStyle}
                handleStyle={handleStyle}
                railStyle={railStyle}
                onChange={changeColor}
              />
            </div>
            <div className="value color" />
          </div>
        </div>
      </aside>
    </Fragment>
  );
};

Settings.propTypes = {
  variables: PropTypes.object.isRequired,
  changeSize: PropTypes.func.isRequired,
  changeSpeed: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired
};

const mapStateToProps = ({ variables }) => ({
  variables
});

export default connect(mapStateToProps, actions)(Settings);
