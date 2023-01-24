const easing = [0.6, -0.05, 0.01, 0.99];

export const showUp = {
  initial: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
