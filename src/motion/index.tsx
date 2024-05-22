import { Variants } from "framer-motion";

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
export const model3DVariants: Variants = {
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

export const aboutVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 0.9,
    },
  },
};
