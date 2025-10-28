"use client";

import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const socials = [
  {
    name: "Email",
    href: "mailto:admin@udeezz.my.id",
    icon: <Mail className="w-6 h-6 text-muted-foreground group-hover:text-pink-500 transition-colors" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yudhistiraarya07/",
    icon: <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-pink-500 transition-colors" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/GreenDreamX",
    icon: <Github className="w-6 h-6 text-muted-foreground group-hover:text-pink-500 transition-colors" />,
  },
];

export default function ContactPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real app, you would handle form submission here (e.g., send data to an API endpoint).
    // For this demo, we'll just show a success toast.
    toast.success("Your message has been sent successfully!");
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section className="container py-20 md:py-24">
      <AnimateOnScroll className="text-center max-w-xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
          Let’s Build Something Together
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          I’m open for collaborations, freelance projects, or simply a friendly conversation.
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.2} className="max-w-xl mx-auto mt-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="p-[1px] rounded-lg bg-gradient-to-r from-pink-500/50 to-blue-500/50">
            <input required type="text" id="name" placeholder="Your Name" className="w-full p-3 bg-card rounded-lg border-none focus:ring-2 focus:ring-pink-500/50 transition-all" />
          </div>
          <div className="p-[1px] rounded-lg bg-gradient-to-r from-pink-500/50 to-blue-500/50">
            <input required type="email" id="email" placeholder="Your Email" className="w-full p-3 bg-card rounded-lg border-none focus:ring-2 focus:ring-pink-500/50 transition-all" />
          </div>
          <div className="p-[1px] rounded-lg bg-gradient-to-r from-pink-500/50 to-blue-500/50">
            <textarea required id="message" placeholder="Your Message" rows={5} className="w-full p-3 bg-card rounded-lg border-none focus:ring-2 focus:ring-pink-500/50 transition-all"></textarea>
          </div>
          <Button type="submit" size="lg" className="w-full relative overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative">Send Message</span>
          </Button>
        </form>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.4} className="text-center max-w-xl mx-auto mt-16">
        <div className="flex justify-center gap-8 mt-6">
          {socials.map((social) => (
            <Link key={social.name} href={social.href} target="_blank" className="group" aria-label={social.name}>
              {social.icon}
            </Link>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
}
