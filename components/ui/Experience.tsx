"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "MNRHUB",
    location: "Hybrid",
    date: "Apr 2024 – Present",
    bullets: [
      "Built a rental management system supporting multiple categories with multi-role access (Consumers, Vendors, Admins) and real-time updates via WebSockets.",
      "Designed and developed a subscription-based SaaS platform using the MERN stack, with secure JWT authentication and HTTPS.",
      "Deployed a subscription flow with free trials, monthly, and annual plans, improving customer acquisition and retention.",
      "Optimized Node.js/Express APIs and MongoDB queries, improving system response times by 30%.",
      "Implemented real-time notifications for subscription updates, messages, and approvals via WebSockets.",
      "Developed an admin dashboard for monitoring vendor approvals, rentals, subscriptions, payments, and analytics.",
      "Ensured system security and scalability with Role-Based Access Control (RBAC).",
      "Collaborated with cross-functional teams in agile sprints to deliver client-focused features.",
    ]
  },
  {
    role: "Technical System Manager",
    company: "BMJ INDUSTRIES FZE LLC",
    location: "United Arab Emirates",
    date: "Jan 2022 – Feb 2024",
    bullets: [
      "Led the development and maintenance of enterprise web applications, ensuring reliability and performance for daily business operations. Built robust and efficient REST APIs with Node.js, Express.js.",
      "Successfully migrated legacy systems to modern Django + React frameworks, enhancing maintainability and scalability.",
      "Designed and implemented secure APIs and role-based authentication, supporting 200+ daily active users.",
      "Regularly pushed code to Git to ensure up-to-date version tracking and collaboration."
    ]
  }
];

export default function Experience() {
  return (
    <div className="relative border-l border-[#00f0ff]/30 space-y-12 ml-6 md:ml-12 pb-6">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative pl-10 md:pl-12"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[24px] top-1 w-12 h-12 bg-black border-2 border-[#00f0ff] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            <Briefcase className="w-5 h-5 text-[#8a2be2]" />
          </div>

          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
            <div>
              <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
              <p className="text-[#00f0ff] text-lg font-medium">{exp.company} <span className="text-zinc-500">|</span> {exp.location}</p>
            </div>
            <div className="text-zinc-400 font-mono mt-2 md:mt-0 text-sm py-1 px-3 bg-white/5 rounded-full border border-white/10 w-fit">
              {exp.date}
            </div>
          </div>

          <ul className="mt-6 space-y-3">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="text-zinc-300 leading-relaxed text-[15px] flex items-start gap-4">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#8a2be2] shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: bullet.replace(/(rental management system|multi-role access|subscription-based SaaS platform|MERN stack|JWT authentication|Node\.js\/Express APIs|MongoDB queries|30%|real-time notifications|admin dashboard|Role-Based Access Control \(RBAC\)|agile sprints|Django \+ React|REST APIs|role-based authentication|200\+ daily active users)/g, '<strong class="text-white">$1</strong>') }} />
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
