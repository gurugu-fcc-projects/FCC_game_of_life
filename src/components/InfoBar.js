import React from "react";

const socials = [
  {
    href: "github.com/GuRuGuMaWaRu",
    className: "github"
  },
  {
    href: "twitter.com/peter_krevenets",
    className: "twitter"
  },
  {
    href: "codepen.io/GuRuGu/",
    className: "codepen-outline"
  }
];

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
      <span className="social-icons">{socials.map(createSocialIcons)}</span>
    </div>
  );
};
