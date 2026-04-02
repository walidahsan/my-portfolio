"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages & Scripting",
    items: ["JavaScript", "Python", "Dart", "HTML/CSS", "AJAX", "JSON"],
  },
  {
    category: "Frameworks & Ecosystems",
    items: ["React.js", "Node.js", "Express.js", "Django", "Flutter", "Tailwind CSS", "Bootstrap", "MVC/MVT"],
  },
  {
    category: "Databases & Tools",
    items: ["MongoDB", "MySQL", "NoSQL", "Git", "VS Code", "PyCharm", "Android Studio", "AWS"],
  },
  {
    category: "Core Competencies",
    items: ["SaaS Architecture", "REST APIs", "WebSockets (Real-time)", "JWT & RBAC Security", "Stripe Integration", "Agile / SCRUM"],
  }
];

export default function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skillsData.map((skillGroup, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#00f0ff]/50 transition-colors"
        >
          <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">{skillGroup.category}</h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((item, i) => (
              <span 
                key={i} 
                className="px-3 py-1.5 bg-[#8a2be2]/10 text-[#00f0ff] text-sm font-medium rounded-lg border border-[#8a2be2]/20 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
