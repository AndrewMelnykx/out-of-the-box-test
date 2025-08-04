import { StoreDispatcherTypes } from "@store/index";
import { handleProgressValue } from "@store/media-list/slice";
import { animate, MotionValue } from "motion";
import { RefObject } from "react";
import { hundredPercent, maxXShift, maxYShift } from "./constants";

const handleProgress = (dispatch: StoreDispatcherTypes) => {
  const interval = setInterval(() => {
    dispatch((_, getState) => {
      const currentV = getState().mediaData.progressValue;
      if (currentV >= hundredPercent) {
        clearInterval(interval);
        return;
      }
      dispatch(handleProgressValue(Math.floor(currentV + 100 / 60)));
    });
  }, 100);

  return () => clearInterval(interval);
};

const handleMouseMove = (
  e: React.MouseEvent,
  ref: RefObject<HTMLVideoElement | null>,
  x: MotionValue<number>,
  y: MotionValue<number>,
) => {
  const bounds = ref?.current?.getBoundingClientRect();
  if (!bounds) return;

  const offsetX = e.clientX - bounds.left;
  const offsetY = e.clientY - bounds.top;

  const centerX = bounds.width / 2;
  const centerY = bounds.height / 2;

  const moveX = ((offsetX - centerX) / centerX) * maxXShift;
  const moveY = ((offsetY - centerY) / centerY) * maxYShift;

  x.set(-moveX);
  y.set(-moveY);
};

const resetPan = (x: MotionValue<number>, y: MotionValue<number>) => {
  animate(x, 0, { duration: 0.5 });
  animate(y, 0, { duration: 0.5 });
};

export { handleProgress, handleMouseMove, resetPan };
