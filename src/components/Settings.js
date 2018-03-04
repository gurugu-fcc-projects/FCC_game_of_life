import React from "react";

const Settings = () => {
  const handleCloseSettings = () => {
    document.querySelector(".settings").classList.toggle("open");
  };

  return (
    <div className="settings">
      <button
        className="settings__button"
        title="Close"
        onClick={handleCloseSettings}
      >
        <i className="settings__icon ion-arrow-left-c" />
      </button>
      <div>
        <div>Size Slider</div>
        <div>Speed Slider</div>
        <div>Color Slider</div>
      </div>
    </div>
  );
};

export default Settings;
