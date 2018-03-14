import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SliderComponent from "./Slider";
import * as actions from "../actions";
import { showHideSettings } from "../utils/showHideSettings";
import { colors400 } from "../utils/data";

class Settings extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.variables.color !== this.props.variables.color) {
      console.log("color changed");
      document.documentElement.style.setProperty(
        "--cell-alive-color",
        colors400[this.props.variables.color]
      );
    }
  }

  render() {
    const {
      variables: { size, speed, color },
      changeSize,
      changeSpeed,
      changeColor
    } = this.props;

    return (
      <Fragment>
        <div id="modal" onClick={showHideSettings} />
        <aside id="settings">
          <button className="button" title="Close" onClick={showHideSettings}>
            <i className="icon ion-arrow-left-c" />
          </button>
          <div className="sliders">
            <SliderComponent
              title="Size"
              min={4}
              max={40}
              value={size}
              handleChange={changeSize}
            />
            <SliderComponent
              title="Speed"
              min={1}
              max={20}
              value={speed}
              handleChange={changeSpeed}
            />
            <SliderComponent
              title="Color"
              min={1}
              max={14}
              value={color}
              handleChange={changeColor}
            />
          </div>
        </aside>
      </Fragment>
    );
  }
}

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
