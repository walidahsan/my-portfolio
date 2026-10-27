import Hero3D from "@/components/ui/Hero3D";
import ProjectList from "@/components/ui/ProjectList";
import ContactForm from "@/components/ui/ContactForm";
import Skills from "@/components/ui/Skills";
import Experience from "@/components/ui/Experience";
import Education from "@/components/ui/Education";
import DownloadCV3D from "@/components/ui/DownloadCV3D";
import Skills3D from "@/components/ui/Skills3D";
import InteractiveAvatar from "@/components/ui/InteractiveAvatar";
import Navbar from "@/components/ui/Navbar";
import { Download, Code } from "lucide-react";
import Image from "next/image";
import profilePhoto from "@/public/images/walid-ahsan-profile.jpg";

export default function Home() {
  return (
    <main className="min-h-screen relative text-white selection:bg-[#00f0ff] selection:text-black scroll-smooth overflow-x-hidden">
      <Navbar />
      <Hero3D />
      {/* Dark overlay to dim the 3D background for better text legibility */}
      <div className="fixed inset-0 bg-black/60 pointer-events-none -z-[5]"></div>

      {/* Hero Section Overlay */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pointer-events-none px-6 text-center pt-28 pb-20">
        {/* Interactive 3D Headshot Avatar */}
        <InteractiveAvatar />

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 pointer-events-auto">
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#8a2be2]">Walid Ahsan</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#00f0ff] mb-2 pointer-events-auto font-medium tracking-wide border-b border-[#8a2be2]/30 pb-2">
          Full Stack Developer | MERN Stack
        </p>
        <p className="text-lg text-zinc-400 max-w-2xl mb-8 pointer-events-auto mt-4">
          Over 3 years of experience designing and delivering scalable web and SaaS solutions across diverse industries using MERN, Django, and React stacks.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pointer-events-auto mb-10">
          <a href="#experience" className="px-8 py-3 bg-[#00f0ff] text-black font-bold rounded-full hover:bg-white transition-colors duration-300">
            View Experience
          </a>
          <a href="#projects" className="px-8 py-3 bg-[#8a2be2]/20 backdrop-blur-md text-[#00f0ff] border border-[#8a2be2]/40 font-bold rounded-full hover:bg-[#8a2be2]/40 transition-colors duration-300">
            View Projects
          </a>
        </div>

        {/* Quick Social & Download Links */}
        <div className="flex gap-6 pointer-events-auto">
          <a href="https://github.com/walidahsan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-xl border border-white/10 hover:border-white/30">
            <Code size={18} /> GitHub
          </a>
          <a href="/WalidAhsanCV-FullStackWebDeveloper.pdf" download className="flex items-center gap-2 text-[#00f0ff] hover:text-white transition-colors bg-[#00f0ff]/10 px-4 py-2 rounded-xl border border-[#00f0ff]/30 hover:border-[#00f0ff]">
            <Download size={18} /> Download CV
          </a>
        </div>
      </section>

      {/* About & Download CV Enhanced Section */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2 bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] grid md:grid-cols-[13rem_1fr] gap-8 items-start">
          {/* Profile photo with neon gradient frame */}
          <div className="relative mx-auto md:mx-0 w-52 md:w-full group">
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-[#00f0ff] via-[#8a2be2] to-[#00f0ff] opacity-80 blur-[1px] group-hover:opacity-100 transition-opacity" />
            <div className="relative rounded-2xl overflow-hidden bg-black">
              <Image
                src={profilePhoto}
                alt="Walid Ahsan in a grey blazer"
                placeholder="blur"
                sizes="13rem"
                className="w-full h-auto aspect-[4/5] object-cover object-top grayscale-[35%] group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-xs font-mono text-[#00f0ff]">~/walid-ahsan</p>
                <p className="text-sm font-bold text-white">Full Stack Developer</p>
              </div>
            </div>
          </div>
          <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white border-l-4 border-[#00f0ff] pl-4">Professional <span className="text-[#8a2be2]">Summary</span></h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed text-lg">
            <p>
              I am a Full Stack Developer with over <strong className="text-white">3 years of experience</strong> designing and delivering scalable web and SaaS solutions. My expertise lies in building subscription-based platforms, rental management systems, and robust enterprise applications.
            </p>
            <p>
              I have a proven track record in optimizing API performance (achieving <strong className="text-[#00f0ff]">30% faster response times</strong>), implementing secure authentication systems including JWT and RBAC, and integrating dynamic real-time features using WebSockets. I am highly adept at collaborating within agile teams and deploying production-ready cloud solutions on AWS.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium">Available for Hybrid / Remote Roles</span>
            </div>
          </div>
          </div>
        </div>

        {/* 3D Download CV Call to Action */}
        <div className="lg:col-span-1 bg-gradient-to-b from-[#8a2be2]/10 to-transparent border border-[#8a2be2]/20 rounded-3xl p-6 flex flex-col items-center text-center">
          <DownloadCV3D />
          <h3 className="text-xl font-bold mb-2">Want my full history?</h3>
          <p className="text-zinc-400 text-sm mb-6">Grab a copy of my official CV outlining all my enterprise experiences.</p>
          <a href="/WalidAhsanCV-FullStackWebDeveloper.pdf" download className="w-full py-4 bg-[#8a2be2] text-white font-bold rounded-xl hover:bg-[#9d3eff] transition-colors flex items-center justify-center gap-2">
            <Download size={20} /> Download PDF
          </a>
        </div>
      </section>

      {/* Skills Section with 3D Render */}
      <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-[#00f0ff]">Skills</span></h2>
          <p className="text-zinc-400 text-lg">Frameworks, languages, and tools I use to build robust applications.</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-center">
          <div className="xl:col-span-1 border border-white/10 rounded-3xl p-2 bg-black/20 backdrop-blur-md shadow-[0_0_30px_rgba(0,240,255,0.1)]">
            <Skills3D />
          </div>
          <div className="xl:col-span-2">
            <Skills />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="text-[#8a2be2]">Experience</span></h2>
          <p className="text-zinc-400 text-lg">My journey driving development and delivering scalable solutions.</p>
        </div>
        <Experience />
      </section>

      {/* Education & Accomplishments Section */}
      <section id="education" className="py-12 px-6 max-w-6xl mx-auto">
        <Education />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-[#00f0ff]">Projects</span></h2>
          <p className="text-zinc-400 text-lg">A selection of my dynamic stack developments and robust API integrations.</p>
        </div>
        <ProjectList />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-transparent to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="text-[#8a2be2]">Touch</span></h2>
            <p className="text-zinc-400 text-lg">Have a project in mind or want to collaborate? Send me a message!</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-zinc-500 text-sm border-t border-white/5 bg-black">
        <p>© {new Date().getFullYear()} Walid Ahsan. All rights reserved.</p>
      </footer>
    </main>
  );
}
