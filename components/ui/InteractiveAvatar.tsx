"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import portrait from "@/public/images/walid-ahsan-portrait.jpg";

export default function InteractiveAvatar() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the raw pointer values so the tilt feels weighted rather than twitchy
  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig);

  return (
    <div
      style={{ perspective: 1000 }}
      className="mb-8 pointer-events-auto"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - r.left) / r.width - 0.5);
        mouseY.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-40 h-40 md:w-52 md:h-52"
      >
        {/* Glow */}
        <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#00f0ff]/40 to-[#8a2be2]/40 blur-3xl" />

        {/* Rotating neon ring */}
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,#00f0ff,#8a2be2,transparent_55%,#00f0ff)]"
        />

        {/* Photo */}
        <div
          className="absolute inset-[4px] rounded-full overflow-hidden bg-black ring-2 ring-black"
          style={{ transform: "translateZ(30px)" }}
        >
          <Image
            src={portrait}
            alt="Walid Ahsan, full stack developer"
            placeholder="blur"
            priority
            sizes="(min-width: 768px) 13rem, 10rem"
            className="w-full h-full object-cover scale-[2.1] origin-[50%_26%]"
          />
        </div>

        {/* Status chip */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-black/80 backdrop-blur-md px-3 py-1 text-xs font-medium text-zinc-200"
          style={{ transform: "translateZ(50px)" }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Open to work
        </div>
      </motion.div>
    </div>
  );
}
