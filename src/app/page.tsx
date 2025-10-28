import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <AnimateOnScroll>
          <main className="text-4xl md:text-5xl font-bold">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                Hello
              </span>{" "}
              , I'm
            </h1>{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                Yudhistira Arya Kalimusada
              </span>{" "}
            </h2>
          </main>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            A passionate Front-End Developer. Welcome to my personal space on the internet.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.4}>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/projects">
              <Button className="w-full md:w-1/3">Lihat Portofolio</Button>
            </Link>

            <Link href="/contact">
              <Button variant="outline" className="w-full md:w-1/3">Hubungi Saya</Button>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Hero-img */}
      <AnimateOnScroll delay={0.6}>
        <div className="shadow-lg">
          <div className="w-80 h-80 bg-secondary rounded-lg"></div>
        </div>
      </AnimateOnScroll>

    </section>
  );
}
