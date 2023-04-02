import { useEffect, useRef } from "react";

export const useSparkAnimation = (ref) => {
  const sparkContainerRef = useRef(null);

  useEffect(() => {
    if (!ref.current || !sparkContainerRef.current) return;

    const containerRect = ref.current.getBoundingClientRect();
    const sparkContainerRect =
      sparkContainerRef.current.getBoundingClientRect();
    const sparkSize = 10;
    const numSparks = 50;

    for (let i = 0; i < numSparks; i++) {
      const spark = document.createElement("div");
      spark.style.width = `${sparkSize}px`;
      spark.style.height = `${sparkSize}px`;
      spark.style.background = "orange";
      spark.style.position = "absolute";
      spark.style.left = `${Math.random() * containerRect.width}px`;
      spark.style.top = `${Math.random() * containerRect.height}px`;
      spark.style.opacity = "0";

      const fadeInDuration = 500;
      const fadeOutDuration = 1000;
      const delay = Math.random() * 2000;

      spark.animate(
        [
          { opacity: 0, transform: `translateY(0)` },
          {
            opacity: 1,
            transform: `translateY(-${sparkContainerRect.height}px)`,
          },
          {
            opacity: 0,
            transform: `translateY(-${
              sparkContainerRect.height + sparkSize
            }px)`,
          },
        ],
        {
          duration: fadeInDuration + fadeOutDuration,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          delay: delay,
          fill: "forwards",
        }
      );

      sparkContainerRef.current.appendChild(spark);
    }
  }, [ref]);

  return sparkContainerRef;
};
