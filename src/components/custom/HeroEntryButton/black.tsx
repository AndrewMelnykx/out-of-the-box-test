import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import BlackFrame from "@images/hero/BlackButtonFrame.svg";
import PointerImg from "@assets/images/hero/Pointer.svg";

import "./black.scss";

const HeroEntryBlackButton = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    });
  }, [controls]);

  const onClick = () => {
    console.log("clicked");
  };

  return (
    <motion.div className="black-button__wrapper">
      <img src={BlackFrame} className="black-button__image-white" />

      <motion.button
        className="black-button__button"
        onClick={onClick}
        initial={{ opacity: 0, y: -25, x: -120 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Accessible version <img src={PointerImg} className="black-button__pointer-image" />
      </motion.button>
    </motion.div>
  );
};

export { HeroEntryBlackButton };
