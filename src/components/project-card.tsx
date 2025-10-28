
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

// Definisikan tipe untuk properti setiap kartu proyek
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  thumbnail: string;
}

// Definisikan gaya untuk setiap tag teknologi
const tagStyles: { [key: string]: { gradient: string; shadow: string } } = {
  "next.js": {
    gradient: "from-black to-gray-700",
    shadow: "hover:shadow-[0_0_12px_rgba(255,255,255,0.5)]",
  },
  firebase: {
    gradient: "from-yellow-500 to-orange-600",
    shadow: "hover:shadow-[0_0_12px_rgba(245,158,11,0.6)]",
  },
  mongodb: {
    gradient: "from-green-500 to-emerald-700",
    shadow: "hover:shadow-[0_0_12px_rgba(16,185,129,0.6)]",
  },
  tailwind: {
    gradient: "from-cyan-400 to-blue-600",
    shadow: "hover:shadow-[0_0_12px_rgba(34,211,238,0.6)]",
  },
  "framer motion": {
    gradient: "from-purple-500 to-pink-500",
    shadow: "hover:shadow-[0_0_12px_rgba(168,85,247,0.6)]",
  },
  react: {
    gradient: "from-sky-400 to-blue-500",
    shadow: "hover:shadow-[0_0_12px_rgba(56,189,248,0.6)]",
  },
  figma: {
    gradient: "from-pink-500 to-red-500",
    shadow: "hover:shadow-[0_0_12px_rgba(236,72,153,0.6)]",
  },
  "user research": {
    gradient: "from-indigo-400 to-purple-500",
    shadow: "hover:shadow-[0_0_12px_rgba(129,140,248,0.6)]",
  },
  default: {
    gradient: "from-gray-400 to-gray-600",
    shadow: "hover:shadow-[0_0_12px_rgba(156,163,175,0.5)]",
  },
};

// Komponen untuk menampilkan tag teknologi dengan gaya gradasi
const TechTag = ({ tag }: { tag: string }) => {
  const style = tagStyles[tag.toLowerCase()] || tagStyles.default;
  return (
    <div
      className={`relative p-[1px] rounded-full bg-gradient-to-r ${style.gradient} transition-all duration-300 ${style.shadow}`}
    >
      <div className="bg-card dark:bg-zinc-800/80 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {tag}
        </span>
      </div>
    </div>
  );
};

// Komponen utama untuk kartu proyek
export function ProjectCard({
  title,
  description,
  tags,
  demoLink,
  githubLink,
  thumbnail,
}: ProjectCardProps) {
  return (
    <div className="group w-[320px] flex-shrink-0">
      <div className="relative rounded-2xl p-[1.5px] bg-zinc-200 dark:bg-zinc-800 group-hover:bg-gradient-to-br group-hover:from-pink-400/50 group-hover:via-purple-500/50 group-hover:to-blue-500/50 transition-all duration-300 ease-in-out">
        <div className="relative bg-card dark:bg-zinc-900/80 backdrop-blur-xl p-5 rounded-[14px] h-full transition-transform duration-300 group-hover:scale-[1.02]">
          <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4 shadow-inner">
            <Image 
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-bold mb-2 truncate">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4 h-16 overflow-hidden text-ellipsis">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.slice(0, 3).map((tag) => (
              <TechTag key={tag} tag={tag} />
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            {demoLink && (
              <Link
                href={demoLink}
                target="_blank"
                className="flex items-center gap-1.5 text-primary hover:text-blue-500 transition-colors"
              >
                <ExternalLink className="h-4 w-4" /> View Live
              </Link>
            )}
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                className="flex items-center gap-1.5 text-primary hover:text-blue-500 transition-colors"
              >
                <Github className="h-4 w-4" /> View Code
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
