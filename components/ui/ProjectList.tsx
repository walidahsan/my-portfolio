"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import Image from "next/image";

type Project = {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
  status: "Public" | "Private" | "Private Confidential";
  techStack: string[];
  githubLink?: string;
  liveUrl?: string;
};

const featuredProjects: Project[] = [
  {
    _id: "1",
    title: "MNRHUB Rental SaaS",
    description: "Rental management system and subscription-based SaaS platform supporting multi-role access and real-time WebSockets.",
    status: "Private Confidential",
    techStack: ["MERN", "JavaScript", "WebSockets"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    githubLink: "",
    liveUrl: ""
  },
  {
    _id: "2",
    title: "MasterBot - Turn Data into Dollars",
    description: "Crypto trading signals platform that analyzes market trends and delivers real-time trading signals through paid subscription plans.",
    status: "Public",
    techStack: ["MERN", "JavaScript", "WebSockets", "REST APIs"],
    imageUrl: "/masterbotSS.png",
    githubLink: "",
    liveUrl: "https://masterbot.xyz"
  },
  {
    _id: "3",
    title: "NovaUtils - The Ultimate Web Toolkit",
    description: "Free web toolkit with calculators, converters, image tools and finance utilities for developers, SEO work and everyday tasks.",
    status: "Public",
    techStack: ["Next.js", "React.js", "JavaScript"],
    imageUrl: "/novautilsss.png",
    githubLink: "",
    liveUrl: "https://novautils.com"

  },

  {
    _id: "4",
    title: "PlayerzPortal Full Stack",
    description: "Gaming player portal with account sign-up and login, built as a React.js frontend backed by a Node.js API.",
    status: "Public",
    techStack: ["React.js", "Node.js", "JavaScript", "API"],
    imageUrl: "/playerzportal.png",
    githubLink: "",
    liveUrl: "https://playerzarena.netlify.app/"
  },
  {
    _id: "5",
    title: "WrestlingNewsPulse",
    description: "Pro wrestling news site with a custom CMS for publishing articles, author pages, categories and an RSS feed.",
    status: "Public",
    techStack: ["Next.js", "React.js", "REST APIs"],
    imageUrl: "/wrestlingnewspulsess.png",
    githubLink: "",
    liveUrl: "https://wrestlingnewspulse.com"
  },

  {
    _id: "6",
    title: "Beyown Real-Time Suite",
    description: "Enterprise applications including real-time chat (Socket.io) and cross-platform mobile apps using Dart.",
    status: "Private",
    techStack: ["Socket.IO", "Dart", "JavaScript", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    githubLink: "",
    liveUrl: ""
  },


];

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProjects.map((project, index) => (
        <motion.div
          key={project._id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-zinc-900/50 backdrop-blur-md rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#00f0ff]/50 transition-colors group flex flex-col h-full"
        >
          {/* Project Image Header */}
          <div className="relative h-48 w-full overflow-hidden bg-black/50 border-b border-white/5">
            {project.imageUrl ? (
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                unoptimized
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00f0ff]/20 to-[#8a2be2]/20 flex items-center justify-center">
                <Code className="text-white/20 w-12 h-12" />
              </div>
            )}

            {/* Status Badge overlay */}
            <div className="absolute top-4 right-4 z-10">
              <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider backdrop-blur-md shadow-lg ${project.status === "Public" ? "bg-green-500/80 text-white" : "bg-zinc-800/80 text-zinc-200"}`}>
                {project.status}
              </span>
            </div>

            {/* Gradient overlay for text legibility */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-900/90 to-transparent pointer-events-none"></div>
          </div>

          <div className="p-6 flex flex-col flex-1 relative">
            <h3 className="text-xl font-bold text-white leading-tight mb-3">{project.title}</h3>

            <p className="text-zinc-400 text-sm mb-6 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech, i) => (
                <span key={i} className="text-xs font-medium px-2.5 py-1 rounded bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-800">
              {project.githubLink ? (
                <a
                  href={project.githubLink}
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                  title="Source Code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code size={18} /> Code
                </a>
              ) : (
                <span className="text-zinc-500 flex items-center gap-2 text-sm">
                  <Code size={18} /> {project.status === "Public" ? "Closed source" : "Client project"}
                </span>
              )}
              {project.status === "Public" && project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="text-zinc-400 hover:text-[#00f0ff] transition-colors flex items-center gap-2 text-sm ml-auto"
                  title="Live Demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live site <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
