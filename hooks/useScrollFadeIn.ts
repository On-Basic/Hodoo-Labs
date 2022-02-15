import { useRef, useEffect, useCallback } from "react";

const useScrollFadeIn = (direction = "up", duration = 1, delay = 0) => {
  const dom = useRef();

  const handleDirection = (name: string) => {
    switch (name) {
      case "up":
        return "translate3d(0, 50%, 0)";
      case "down":
        return "translate3d(0, -50%, 0)";
      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";
      default:
        return;
    }
  };

  const handleScroll = useCallback(
    ([entry]) => {
      const current: HTMLElement = element;
      if (entry.isIntersecting) {
        element.style.transitionProperty = "all";
        element.style.transitionDuration = `${duration}s`;
        element.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        element.style.transitionDelay = `${delay}s`;
        element.style.opacity = 1;
        element.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer: any;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};

export default useScrollFadeIn;
