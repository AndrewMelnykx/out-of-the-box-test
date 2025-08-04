import { motion } from "motion/react";

import PreloaderSpriteLogo from "@images/preloader/sprite-logo.svg";
import PreloaderWakandaLogo from "@images/preloader/preloader-wakanda.png";
import PreloaderTheHallLogo from "@images/preloader/preloader-the-hall.svg";

import "./index.scss";

interface LogosProps {
  wakandaScale?: number;
  spriteScale?: number;
  theHallScale?: number;
}

const Logos = ({ wakandaScale, spriteScale, theHallScale }: LogosProps) => {
  return (
    <motion.div className="preloader__logos-wrapper">
      <motion.div className="preloader__sprite-wakanda-wrapper">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.1,
          }}
          src={PreloaderSpriteLogo}
          style={{ scale: spriteScale }}
          alt="background-img"
          loading="lazy"
          className="preloader__sprite-img"
        />
        <p style={{ padding: 10 }}>x</p>
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.1,
          }}
          style={{ scale: wakandaScale }}
          src={PreloaderWakandaLogo}
          alt="background-img"
          loading="lazy"
          className="preloader__wakanda-img"
        />
      </motion.div>
      <motion.img
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.1,
        }}
        style={{ scale: theHallScale }}
        src={PreloaderTheHallLogo}
        alt="background-img"
        loading="lazy"
        className="preloader__the-hall-img"
      />
    </motion.div>
  );
};

export { Logos };
