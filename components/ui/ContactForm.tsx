"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <motion.form 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-6 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
        <input 
          type="text" 
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 bg-black/50 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00f0ff] focus:border-transparent text-white transition-all"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
        <input 
          type="email" 
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 bg-black/50 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00f0ff] focus:border-transparent text-white transition-all"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
        <textarea 
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-black/50 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00f0ff] focus:border-transparent text-white transition-all resize-none"
          placeholder="Hey! Let's talk about..."
        />
      </div>

      <button 
        type="submit" 
        disabled={status === "loading" || status === "success"}
        className="w-full py-4 flex justify-center items-center gap-2 bg-[#00f0ff] hover:bg-[#00d0e0] text-black font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : (
          <>
            Send Message <Send size={18} />
          </>
        )}
      </button>

      {status === "error" && (
        <p className="text-red-500 text-sm text-center mt-2">
          Oops! Something went wrong. Please try again later.
        </p>
      )}
    </motion.form>
  );
}
