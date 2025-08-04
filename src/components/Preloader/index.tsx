import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import PreloaderBackground from "@images/preloader/tile-background.webp";
import PreloaderGlare from "@images/preloader/preloader-glare.webp";
import { Logos } from "./logos";
import { ProgressTrack } from "@components/Progress";
import { handleProgress } from "@helpers/funcs";
import { UseStoreDispatcher } from "@store/index";
import { progressValueSelector } from "@store/media-list/selectors";
import { hundredPercent, oneSecond } from "@helpers/constants";

import "./index.scss";

const Preloader = () => {
  const dispatch = UseStoreDispatcher();
  const progress = useSelector(progressValueSelector);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const clear = handleProgress(dispatch);
    return () => clear();
  }, [dispatch]);

  useEffect(() => {
    if (progress === hundredPercent) {
      const timeout = setTimeout(() => setVisible(false), oneSecond);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (!visible) return null;

  return (
    <motion.div
      className="preloader"
      animate={{ y: progress === hundredPercent ? "-100%" : 0, opacity: "1" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.img
        src={PreloaderGlare}
        alt="glare-img"
        className="preloader__glare-img"
        loading="lazy"
      />
      <motion.img
        src={PreloaderBackground}
        alt="background-img"
        loading="lazy"
        className="preloader__background-img"
        animate={{ opacity: progress === hundredPercent ? 1 : 0.2 }}
        transition={{ delay: 0.1 }}
      />
      <motion.div className="preloader__content-wrapper">
        <Logos />
        <ProgressTrack />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
