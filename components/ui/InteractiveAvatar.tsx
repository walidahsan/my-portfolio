"use client";

import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function InteractiveAvatar() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // State to hold the current image direction
  const [currentImage, setCurrentImage] = useState("/walidahsan.png");

  // Smooth the raw mouse values to give a buttery animated feel to the face tilt
  const springConfig = { damping: 25, stiffness: 120 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // If mouse is on the left (-0.5), rotateY is negative (normal points left)
  // If mouse is on the top (-0.5), rotateX is positive (normal points up)
  const rotateX = useTransform(y, [-0.5, 0.5], [30, -30]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-30, 30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position relative to the entire window
      const normalizedX = (e.clientX / window.innerWidth) - 0.5;
      const normalizedY = (e.clientY / window.innerHeight) - 0.5;

      mouseX.set(normalizedX);
      mouseY.set(normalizedY);

      // Determine the dominant direction
      const threshold = 0.15; // How far the mouse needs to move to trigger a new image

      const isXActive = Math.abs(normalizedX) > threshold;
      const isYActive = Math.abs(normalizedY) > threshold;
      setCurrentImage("/walidahsan.png")

      // if (isXActive && isYActive) {
      //   // Diagonals (using standard Math cartesian planes relative to screen where +Y is down)
      //   if (normalizedX > 0 && normalizedY < 0) {
      //     setCurrentImage("/walidahsan-up-right.png");
      //   } else if (normalizedX < 0 && normalizedY < 0) {
      //     setCurrentImage("/walidahsan-up-left.png");
      //   } else if (normalizedX > 0 && normalizedY > 0) {
      //     setCurrentImage("/walidahsan-down-right.png");
      //   } else if (normalizedX < 0 && normalizedY > 0) {
      //     setCurrentImage("/walidahsan-down-left.png");
      //   }
      // } else if (isXActive) {
      //   // Strictly Horizontal
      //   if (normalizedX > 0) {
      //     setCurrentImage("/walidahsan-right.png");
      //   } else {
      //     setCurrentImage("/walidahsan-left.png");
      //   }
      // } else if (isYActive) {
      //   // Strictly Vertical
      //   if (normalizedY > 0) {
      //     setCurrentImage("/walidahsan-down.png"); // +y is down on screen
      //   } else {
      //     setCurrentImage("/walidahsan-up.png"); // -y is up on screen
      //   }
      // } else {
      //   // Center Rest State
      //   setCurrentImage("/walidahsan.png");
      // }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div style={{ perspective: 1200 }} className="mb-6 pointer-events-auto">
      <motion.div
        ref={ref}
        style={{
          // rotateX,
          // rotateY,
          transformStyle: "preserve-3d"
        }}
        // Completely removed borders, shadows, backgrounds, and circular cuts to let the raw PNG shine naturally
        className="w-32 h-32 md:w-48 md:h-48 flex items-center justify-center pointer-events-auto group cursor-pointer relative bg-transparent"
      >
        {/* 
          This is the element holding your actual image.
          We use translateZ so the image visually floats slightly inside the "bubble",
          making the 3D effect look incredibly deep when rotating!
        */}
        <motion.div
          style={{ translateZ: "40px", transformStyle: "preserve-3d" }}
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-transparent"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={currentImage}
                alt="Walid Ahsan Avatar"
                fill
                className="object-contain bg-transparent"
                unoptimized
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
