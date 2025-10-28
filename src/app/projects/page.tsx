
"use client";

import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Data untuk semua proyek, proyek pertama adalah featured project.
const projects = [
  {
    featured: true,
    title: "Personal Portfolio V2",
    description: "Versi kedua dari portofolio pribadi saya yang menampilkan proyek-proyek terbaru dan keterampilan saya dalam pengembangan web modern.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    demoLink: "https://udeezz.my.id",
    githubLink: "https://github.com/GreenDreamX/Udeezz-web",
    thumbnail: "/image/portofolio.png",
  },
  {
    title: "OSIS Election System - SMKN 1 Majalaya",
    description: "Election system web application untuk pemilihan OSIS di SMKN 1 Majalaya yang memanfaatkan Firebase sebagai backend untuk autentikasi dan penyimpanan data secara real-time.",
    tags: ["Next.js", "Firebase", "Tailwind", "React"],
    demoLink: "https://osis.smkn1majalaya.sch.id",
    githubLink: "https://github.com/GreenDreamX/Pilketos25",
    thumbnail: "/image/pilketos25.png",
  },
  {
    title: "MPLS Presence App",
    description: "Aplikasi presensi digital untuk kegiatan MPLS di SMKN 1 Majalaya, memudahkan pencatatan kehadiran siswa dengan antarmuka yang user-friendly.",
    tags: ["Firebase", "Tailwind"],
    demoLink: "https://presensi.udeezz.sch.id",
    githubLink: "https://github.com/GreenDreamX/Presensi",
    thumbnail: "/image/presensi.png",
  },
  {
    title: "OSIS Notion Dashboard",
    description: "Dashboard Notion yang dirancang khusus untuk pengurus OSIS SMKN 1 Majalaya guna mengelola tugas, jadwal, dan dokumentasi secara efisien.",
    tags: ["React", "MongoDB"],
    demoLink: "https://notion.so",
    githubLink: "#",
    thumbnail: "/image/notion osis.png",
  },
];

// Ekstrak featured project dan other projects dari data
const featuredProject = projects[0];
const otherProjects = projects.slice(1);

// Gaya untuk tag teknologi di featured project
const tagStyles: { [key: string]: { gradient: string; shadow: string } } = {
  "next.js": { gradient: "from-black to-gray-700", shadow: "hover:shadow-[0_0_12px_rgba(255,255,255,0.5)]" },
  firebase: { gradient: "from-yellow-500 to-orange-600", shadow: "hover:shadow-[0_0_12px_rgba(245,158,11,0.6)]" },
  tailwind: { gradient: "from-cyan-400 to-blue-600", shadow: "hover:shadow-[0_0_12px_rgba(34,211,238,0.6)]" },
  react: { gradient: "from-sky-400 to-blue-500", shadow: "hover:shadow-[0_0_12px_rgba(56,189,248,0.6)]" },
  default: { gradient: "from-gray-400 to-gray-600", shadow: "hover:shadow-[0_0_12px_rgba(156,163,175,0.5)]" },
};

const TechTag = ({ tag }: { tag: string }) => {
  const style = tagStyles[tag.toLowerCase()] || tagStyles.default;
  return (
    <div className={`relative p-[1px] rounded-full bg-gradient-to-r ${style.gradient} transition-all duration-300 ${style.shadow}`}>
      <div className="bg-card dark:bg-zinc-800/80 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{tag}</span>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container py-24 md:py-28 space-y-20"
    >
      <AnimateOnScroll className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Works by <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">Yudhistira Arya Kalimusada</span></h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Here are some of my projects that showcase my skills and passion for technology. Each project reflects my dedication to creating impactful and user-centered solutions.
        </p>
      </AnimateOnScroll>

      {/* Featured Project Section */}
      <AnimateOnScroll delay={0.1} className="group">
        <div className="relative rounded-3xl p-[2px] bg-gradient-to-b from-zinc-200 to-white/0 dark:from-zinc-800 dark:to-black/0">
          <div className="relative bg-card dark:bg-zinc-900/90 backdrop-blur-2xl p-8 md:p-10 rounded-[22px]">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Konten Teks */}
              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-3xl font-bold text-primary">{featuredProject.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{featuredProject.description}</p>
                <div className="flex flex-wrap gap-3">
                  {featuredProject.tags.map((tag) => <TechTag key={tag} tag={tag} />)}
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <Link href={featuredProject.demoLink} target="_blank">
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300">View Live</Button>
                  </Link>
                  <Link href={featuredProject.githubLink} target="_blank">
                    <Button variant="outline">View Code</Button>
                  </Link>
                </div>
              </div>

              {/* Gambar Proyek */}
              <div className="relative lg:col-span-3 w-full h-80 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-purple-500/20 transition-shadow duration-400">
                <Image
                  src={featuredProject.thumbnail}
                  alt={featuredProject.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Other Projects Section */}
      <AnimateOnScroll delay={0.2} className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Other Projects</h2>
        <div className="relative">
          <div className="flex gap-8 pb-6 overflow-x-auto scrollbar-hide">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          {/* Gradient Fades for Scroll */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
      </AnimateOnScroll>
    </motion.section>
  );
}
