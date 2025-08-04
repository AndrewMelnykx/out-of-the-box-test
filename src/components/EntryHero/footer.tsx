import WakandaImage from "@images/preloader/preloader-wakanda.png";
import SpriteImage from "@images/preloader/sprite-logo.svg";

import "./index.scss";

const HeroEntryFooter = () => {
  return (
    <div className="entry-footer">
      <div className="entry-footer__wrapper">
        <span className="entry-footer__sprite-span">
          <img src={SpriteImage} className="entry-footer__sprite" />
        </span>
        <span className="entry-footer__wakanda-span">
          <img src={WakandaImage} className="entry-footer__wakanda" />
        </span>

        <span className="entry-footer__text-span">
          <p className="entry-footer__text">Sprite Zero Sugar®|©Marvel</p>
        </span>
      </div>
    </div>
  );
};

export { HeroEntryFooter };
