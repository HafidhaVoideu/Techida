import { statsData } from "@/lib/contants";
import React, { useRef } from "react";

import { animate, useInView, useIsomorphicLayoutEffect } from "framer-motion";

const Statistics = () => {
  return (
    <div className="bg-stable-gray">
      <div className="flex flex-col md:flex-row gap-6  items-center justify-between container py-12 ">
        {statsData.map((x) => (
          <StatisticsItem key={x.id} {...x}></StatisticsItem>
        ))}
      </div>
    </div>
  );
};

export default Statistics;

const StatisticsItem = ({ from = 0, title = "", stat: to = 90 }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    // Set initial value
    element.textContent = String(from);

    // If reduced motion is enabled in system's preferences
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = String(to);
      return;
    }

    const controls = animate(from, to, {
      duration: 4,
      ease: "easeOut",
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    // Cancel on unmount
    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);

  return (
    <div className="capitalize text-center">
      <h2
        ref={ref}
        className=" text-2xl :mdtext-4xl md:text-5xl text-primary font-bold mb-4"
      >
        {to}
      </h2>
      <h1 className=" text-md md:text-xl lg:text-2xl font-bold text-white">
        {title}
      </h1>
    </div>
  );
};
