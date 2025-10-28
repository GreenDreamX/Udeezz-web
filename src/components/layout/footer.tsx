import { Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            © {new Date().getFullYear()} Yudhistira Arya Kalimusada. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/GreenDreamX/" target="_blank" rel="noreferrer">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </a>
          <a href="https://www.linkedin.com/in/yudhistiraarya07/" target="_blank" rel="noreferrer">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </a>
          <a href="https://instagram.com/udeezz" target="_blank" rel="noreferrer">
            <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </a>
        </div>
      </div>
    </footer>
  );
}
