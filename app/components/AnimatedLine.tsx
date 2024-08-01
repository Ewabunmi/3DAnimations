// components/AnimatedLine.tsx

import React from "react";
import { useSpring, animated } from "@react-spring/web";

interface AnimatedLineProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

const AnimatedLine: React.FC<AnimatedLineProps> = ({
  startX,
  startY,
  endX,
  endY,
}) => {
  const { x, y, width } = useSpring({
    from: { x: startX, y: startY, width: 0 },
    to: {
      x: endX,
      y: endY,
      width: Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2),
    },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      style={{
        position: "absolute",
        background: "red",
        height: "2px",
        width: width.to((w) => `${w}px`),
        transform: x.to(
          (x, y) =>
            `translate(${x}px, ${y}px) rotate(${Math.atan2(endY - startY, endX - startX)}rad)`
        ),
        transformOrigin: "0% 0%",
      }}
    />
  );
};

export default AnimatedLine;
