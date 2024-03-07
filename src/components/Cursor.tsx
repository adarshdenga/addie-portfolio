import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: -16, y: -16 });

  useEffect(() => {
    function mouseMove(e: MouseEvent) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      return window.removeEventListener("mousemove", mouseMove);
    };
  });

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <motion.div className="cursor" variants={variants} animate="default" />
  );
}
