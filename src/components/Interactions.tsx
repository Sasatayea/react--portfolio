import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - 4}px`;
        dotRef.current.style.top = `${e.clientY - 4}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX - 18}px`;
        ringRef.current.style.top = `${e.clientY - 18}px`;
      }
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .hoverable")) setHovering(true);
    };
    const handleOut = () => setHovering(false);

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className={`cursor-ring hidden md:block ${hovering ? "hovering" : ""}`} />
    </>
  );
};

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
};

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.span
          className="font-heading text-2xl tracking-tighter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="gradient-text">M</span>ostafa
          <span className="gradient-text">.</span>
        </motion.span>
        <div className="loading-bar" />
      </div>
    </motion.div>
  );
};
