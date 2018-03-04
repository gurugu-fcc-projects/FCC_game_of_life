import React, { Fragment } from "react";

import { showHideSettings } from "../utils/showHideSettings";

const Settings = () => {
  return (
    <div>
      <div id="modal" />
      <aside id="settings">
        <button
          className="settings__button"
          title="Close"
          onClick={showHideSettings}
        >
          <i className="settings__icon ion-arrow-left-c" />
        </button>
        <div>
          <div>Size Slider</div>
          <div>Speed Slider</div>
          <div>Color Slider</div>
        </div>
      </aside>
    </div>
  );
};

export default Settings;
