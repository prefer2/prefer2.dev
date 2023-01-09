const throttle = (handler: (...args: unknown[]) => void) => {
  let isWaiting = false;

  return function (this: unknown, ...args: unknown[]) {
    if (!isWaiting) {
      window.requestAnimationFrame(() => {
        handler.apply(this, args);
        isWaiting = false;
      });

      isWaiting = true;
    }
  };
};

export default throttle;
