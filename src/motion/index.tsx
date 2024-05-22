import { motion, Variants } from "framer-motion";

export const helloVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: 200,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
export const model3D: Variants = {
  offscreen: {
    opacity: 0,
    x: -200,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
