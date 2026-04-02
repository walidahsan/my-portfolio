"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const accomplishments = [
  "Successfully delivered multiple full-stack solutions by managing the entire software development lifecycle, from requirements analysis to production deployment.",
  "Introduced and scaled Agile/SCRUM practices, increasing delivery speed and improving team collaboration across projects.",
  "Established Git-based workflows that enhanced code integrity, peer review efficiency, and cross-team collaboration.",
  "Deployed high-performing web and SaaS applications, consistently meeting client requirements and quality benchmarks."
];

export default function Education() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Education */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-[#00f0ff]/50 transition-colors h-fit"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white/5 rounded-2xl text-[#00f0ff] border border-white/10">
            <GraduationCap size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Education</h3>
            <p className="text-zinc-400">Academic Background</p>
          </div>
        </div>

        <div className="pl-4 border-l-2 border-[#8a2be2]/50 space-y-2 py-2">
          <h4 className="text-xl font-bold text-white">BSc (Hons) Computer Science</h4>
          <p className="text-[#00f0ff] font-medium uppercase tracking-wider text-sm">Graduated</p>
        </div>
      </motion.div>

      {/* Accomplishments */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-[#8a2be2]/50 transition-colors"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white/5 rounded-2xl text-[#8a2be2] border border-white/10">
            <Award size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Accomplishments</h3>
            <p className="text-zinc-400">Key Achievements</p>
          </div>
        </div>

        <ul className="space-y-4">
          {accomplishments.map((acc, index) => (
            <li key={index} className="flex items-start gap-3 text-zinc-300">
              <span className="mt-1.5 w-2 h-2 rounded bg-gradient-to-br from-[#00f0ff] to-[#8a2be2] shrink-0 blur-[1px]" />
              <p className="leading-relaxed text-[15px]">
                <span dangerouslySetInnerHTML={{ __html: acc.replace(/(delivered multiple full-stack solutions|Agile\/SCRUM practices|Git-based workflows|high-performing web and SaaS applications)/g, '<strong class="text-white">$1</strong>') }} />
              </p>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
