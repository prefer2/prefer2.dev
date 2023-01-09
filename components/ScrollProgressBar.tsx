import { Router } from "next/router";
import React, { useEffect, useState } from "react";

import throttle from "utils/throttle";

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    Router.events.on("routeChangeComplete", (): void => setScrollPercentage(0));

    const scroll = (): void => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      const windowHeight = scrollHeight - clientHeight;
      const currentPercent = scrollTop / windowHeight;

      setScrollPercentage(currentPercent * 100);
    };

    window.addEventListener("scroll", throttle(scroll));

    return () => window.removeEventListener("scroll", throttle(scroll));
  }, []);

  return (
    <div
      style={{ width: `${scrollPercentage}%` }}
      className={`fixed top-16 h-1 bg-blue-200`}
    />
  );
};

export default ScrollProgressBar;
