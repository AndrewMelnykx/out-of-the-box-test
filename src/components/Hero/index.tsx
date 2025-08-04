import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { isMainHeroVisibleSelector } from "@store/media-list/selectors";
import TempleVideo from "@videos/EntryHeroVideo.mp4";

const Hero = () => {
  const isHeroVisible = useSelector(isMainHeroVisibleSelector);

  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHeroVisible ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
    >
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        className="w-full h-auto rounded-lg shadow-lg"
      >
        <source src={TempleVideo} type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default Hero;
