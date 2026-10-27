"use client";

import { motion } from "framer-motion";
import Avatar3D from "./Avatar3D";

export default function InteractiveAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mb-6 w-60 h-60 md:w-72 md:h-72 pointer-events-auto"
    >
      {/* Glow platform behind the avatar */}
      <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-[#00f0ff]/30 to-[#8a2be2]/40 blur-3xl" />
      <div className="absolute inset-4 rounded-full border border-[#00f0ff]/25" />

      {/* Fade the torso out at the bottom so the bust blends into the hero */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_70%,transparent)]">
        <Avatar3D />
      </div>

      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-black/80 backdrop-blur-md px-3 py-1 text-xs font-medium text-zinc-200">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Open to work
      </div>
    </motion.div>
  );
}
