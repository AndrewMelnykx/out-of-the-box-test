import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import GreenFrame from "@images/hero/GreenButtonFrame.svg";
import GreenBars from "@images/hero/GreenButtonBars.svg";
import WhiteFrame from "@images/hero/GreenButtonWhiteFrame.svg";
import PointerImg from "@assets/images/hero/Pointer.svg";

import { UseStoreDispatcher } from "@store/index";
import { handleEntryHeroButton } from "@store/media-list/slice";

import "./index.scss";

const HeroGreenButton = () => {
  const controls = useAnimation();
  const dispatch = UseStoreDispatcher();

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    });
  }, [controls]);

  const onClick = () => {
    dispatch(handleEntryHeroButton(true));
  };
  return (
    <motion.div className="green-button__wrapper">
      <img src={GreenBars} className="green-button__bars green-button__bars--left" />
      <img src={GreenBars} className="green-button__bars green-button__bars--right" />
      <img src={GreenFrame} className="green-button__image" />
      <img src={WhiteFrame} className="green-button__image-white" />

      <motion.button
        className="green-button__button"
        onClick={onClick}
        initial={{ opacity: 0, y: -25, x: -120 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        ENTER <img src={PointerImg} className="green-button__pointer-image" />
      </motion.button>
    </motion.div>
  );
};

export { HeroGreenButton };
