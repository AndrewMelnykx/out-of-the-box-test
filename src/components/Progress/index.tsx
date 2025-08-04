import { progressValueSelector } from "@store/media-list/selectors";
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProgressTrack = () => {
  const progress = useSelector(progressValueSelector);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      width: `250px`,
      opacity: 1,
      transition: { duration: 1 },
    });
  }, [controls]);
  return (
    <motion.div
      className="preloader__progress-track"
      initial={{ width: "0px", opacity: "0" }}
      animate={controls}
    >
      <div className="preloader__progress-fill" style={{ width: `${progress}%` }}>
        <p
          style={{
            position: "absolute",
            right: "-1.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            textShadow: "0 0 12px var(--lightGreenColor)",
            whiteSpace: "nowrap",
          }}
        >
          {progress.toFixed(0) + "%"}
        </p>
      </div>
    </motion.div>
  );
};

export { ProgressTrack };
