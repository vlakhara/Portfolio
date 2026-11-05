import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { CursorContext } from "../Context";
import { cursorVariants } from "../utils";

// Tight spring: follows the pointer closely but removes jitter.
const followSpring = { stiffness: 900, damping: 60, mass: 0.2 };
const sizeSpring = { type: "spring", stiffness: 260, damping: 26 };

const Cursor = () => {
  const { cursorVariant } = useContext(CursorContext);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, followSpring);
  const smoothY = useSpring(y, followSpring);

  useEffect(() => {
    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  const { mixBlendMode, ...shape } = cursorVariants(cursorVariant);

  // The outer element moves (GPU transform) and carries the blend mode so it
  // blends with the page; the inner dot only animates its size and fill.
  return (
    <motion.div
      className="cursor"
      style={{
        x: smoothX,
        y: smoothY,
        mixBlendMode: mixBlendMode || "normal",
      }}
    >
      <motion.div
        className="cursor-dot"
        animate={shape}
        transition={sizeSpring}
      />
    </motion.div>
  );
};

export default Cursor;
