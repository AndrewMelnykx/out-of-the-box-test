import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { motion, useMotionValue } from "framer-motion";

import TempleVideo from "@videos/EntryHeroVideo.mp4";
import { hundredPercent, twoSeconds } from "@helpers/constants";
import { isMainHeroVisibleSelector, progressValueSelector } from "@store/media-list/selectors";
import { handleMouseMove, resetPan } from "@helpers/funcs";
import HeroContent from "./content";

import "./index.scss";

const EntryHero = () => {
  const progress = useSelector(progressValueSelector);
  const entryPressed = useSelector(isMainHeroVisibleSelector);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [scale, setScale] = useState(0.85);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setScale(1.1);
    }, twoSeconds);
    return () => clearTimeout(timeout);
  }, []);

  return progress === hundredPercent ? (
    <motion.div
      className="entry-hero"
      animate={{
        y: entryPressed ? "-100%" : 0,
        opacity: entryPressed ? 0 : 1,
      }}
    >
      <HeroContent />
      <motion.video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="entry-hero__video"
        animate={{ scale, opacity: scale === 1.1 ? 0.5 : 1.1 }}
        style={{
          x,
          y,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={e => handleMouseMove(e, videoRef, x, y)}
        onMouseLeave={() => resetPan(x, y)}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <source src={TempleVideo} type="video/mp4" />
      </motion.video>
    </motion.div>
  ) : null;
};

export default EntryHero;
