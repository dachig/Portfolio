import { ExperienceCard } from "@/components/experienceCard";
import IconCloud from "@/components/magicui/icon-cloud";
import { Navigation } from "@/components/navigation";
import { AnimatedPinDemo } from "@/components/projectPinCard";
const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "prisma",
  "postgresql",
  "vercel",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
];
export default function Expertise() {
  return (
    <main className="p-4">
      <Navigation />
      <div className="flex flex-col py-8 md:py-20 gap-12 md:gap-24 lg:gap-36">
        <div>
          <h2 className="flex flex-col text-sm text-center text-slate-500 <">
            I constantly try to improve{" "}
            <span className="text-purple-400 text-xl lg:text-4xl font-medium">
              My tech stack
            </span>
          </h2>
          <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-full mx-auto mt-8 shadow-2xl shadow-purple-300 bg-radial-sphere dark:bg-radial-sphere px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-16">
          <h2 className="text-center text-xl lg:text-4xl text-gray-700">
            Some of my <span className="text-purple-400">recent projects</span>
          </h2>
          <AnimatedPinDemo />
        </div>

        <div className="flex flex-col gap-4 lg:gap-8 mt-8 md:mt-16">
          <h2 className="text-center text-xl lg:text-4xl text-gray-700">
            Some of my <span className="text-purple-400">recent experiences</span>
          </h2>
          <ExperienceCard/>
        </div>
      </div>
    </main>
  );
}
