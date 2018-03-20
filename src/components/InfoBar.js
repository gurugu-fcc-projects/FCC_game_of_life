import React from "react";
import { socialIcons } from "../utils/data";

export default () => {
  const createSocialIcons = ({ href, className }) => {
    return (
      <a href={`https://${href}`} target="blank" key={className}>
        <i className={`info-bar__icon ion-social-${className}`} />
      </a>
    );
  };
  return (
    <div className="info-bar">
      <span className="copyright">2018, GuRuGuMaWaRu</span>
      <span className="social-icons">{socialIcons.map(createSocialIcons)}</span>
    </div>
  );
};
