"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { useRouter } from "next/navigation";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Home() {
  const router = useRouter();
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <Highlight className="text-black dark:text-white">
          I'm Dachi Giorgobiani.
        </Highlight>{" "}
        A passionate webdeveloper who likes to create unique experiences.
        <div className="flex justify-center gap-4 mt-8">
          <button onClick={() => router.push("/work")} className="text-xs">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 text-gray-700 dark:text-white flex items-center"
            >
              Discover
            </HoverBorderGradient>{" "}
          </button>
          <button onClick={() => router.push("/contact")} className="text-xs">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-gray-700 dark:text-white flex items-center"
            >
              Let's Talk
            </HoverBorderGradient>
          </button>
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}
