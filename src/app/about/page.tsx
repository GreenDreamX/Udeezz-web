import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Code, Figma, GitBranch, Cpu, Palette, Framer, Award, Network, Flame } from "lucide-react";
import Image from "next/image";

const skills = [
  { name: "Figma", icon: <Figma size={32} /> },
  { name: "Web Development", icon: <Code size={32} /> },
  { name: "UI/UX Design", icon: <Palette size={32} /> },
  { name: "Firebase", icon: <Flame size={32} /> },
  { name: "Network Security", icon: <Network size={32} /> },
  { name: "Git", icon: <GitBranch size={32} /> },
];

const certifications = [
  { name: "Computer Network - Junior Technical Support", issuer: "Badan Nasinal Sertifikasi Profesi (BNSP)" },
  { name: "Microsoft Ready4AI & Cybersecurity Training", issuer: "Microsoft by InfraDigital Foundation" },
  { name: "Firebase Fundamentals", issuer: "Google cloudskillboost" },
];

const education = [
  {
    degree: "Major of Computer Engineering",
    university: "Telkom University",
    date: "2025 - Present",
    logo: "/image/telkom_university.png",
  },
  {
    degree: "Computer and Telecommunication Engineering",
    university: "SMKN 1 Majalaya",
    date: "2022 - 2025",
    logo: "/image/smkn.png",
  },
];

export default function AboutPage() {
  return (
    <section className="container py-20 md:py-24 space-y-16">
      <AnimateOnScroll className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          About Me
        </h1>
        <div className="text-center space-y-4 text-lg text-muted-foreground">
          <p>
            Hi, I’m Yudhistira Arya Kalimusada, a Computer Engineering student at Telkom University with a strong passion for Artificial Intelligence, Machine Learning, and Data Analytics.
I love exploring how technology can turn data into insights and intelligence that solve real-world problems.
          </p>
          <p>
            Currently, I’m focused on developing my skills in AI-driven software development, data visualization, and system optimization, while continuously learning to build solutions that are not only functional but also impactful and user-centered.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.2}>
        <h2 className="text-3xl font-bold text-center">My Skills</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center text-center justify-center gap-2 p-4 border rounded-lg bg-card hover:bg-secondary transition-colors">
              <div className="text-pink-500">{skill.icon}</div>
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      <div className="grid md:grid-cols-2 gap-12">
        <AnimateOnScroll delay={0.4}>
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left mb-8">Education</h2>
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.university} className="flex items-center gap-6">
                  <div className="relative w-14 h-14 bg-secondary p-2 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={edu.logo}
                      alt={`${edu.university} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg">{edu.degree}</p>
                    <p className="text-muted-foreground">{edu.university}</p>
                    <p className="text-sm text-muted-foreground">{edu.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.6}>
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left mb-8">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="p-[1px] rounded-lg bg-gradient-to-r from-pink-500/50 to-blue-500/50">
                  <div className="bg-card p-4 rounded-lg flex items-center gap-4">
                    <Award className="text-pink-500 flex-shrink-0" />
                    <div>
                      <p className="font-bold">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll delay={0.8} className="mt-8 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">Beyond Academics.</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Outside of my academic life, I enjoy exploring various creative and technical fields that help me grow both personally and professionally.
From experimenting with web design, automation tools, and AI projects, I love challenging myself to keep learning beyond the classroom.
        </p>
      </AnimateOnScroll>
    </section>
  );
}