import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import React, { Fragment } from "react";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";

import { showHideSettings } from "../utils/showHideSettings";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const trackStyle = { backgroundColor: "rgb(247, 147, 129)", height: 10 };

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

const Settings = () => {
  return (
    <Fragment>
      <div id="modal" onClick={showHideSettings} />
      <aside id="settings">
        <button
          className="settings__button"
          title="Close"
          onClick={showHideSettings}
        >
          <i className="settings__icon ion-arrow-left-c" />
        </button>
        <div className="settings-sliders">
          <div>
            <h4>Size</h4>
            <div>
              <Slider
                min={0}
                max={20}
                defaultValue={3}
                handle={handle}
                trackStyle={trackStyle}
                handleStyle={handleStyle}
                railStyle={railStyle}
              />
            </div>
          </div>
          <div>
            <h4>Speed</h4>
            <div>
              <Slider
                min={0}
                max={20}
                defaultValue={3}
                handle={handle}
                trackStyle={trackStyle}
                handleStyle={handleStyle}
                railStyle={railStyle}
              />
            </div>
          </div>
          <div>
            <h4>Color</h4>
            <div>
              <Slider
                min={0}
                max={20}
                defaultValue={3}
                handle={handle}
                trackStyle={trackStyle}
                handleStyle={handleStyle}
                railStyle={railStyle}
              />
            </div>
          </div>
        </div>
      </aside>
    </Fragment>
  );
};

export default Settings;
