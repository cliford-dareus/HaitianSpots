import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { useRef } from "react";
import { BannerParallax } from "./Banner.style";

const Parallax = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const velocity = useMotionValue(50);
  const smoothVelocity = useSpring(velocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef(1);

  const x = useTransform(baseX, (v) => `${wrap(-20, -50, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <BannerParallax>
      <motion.div style={{ x, color: "whitesmoke" }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </BannerParallax>
  );
};

export default Parallax