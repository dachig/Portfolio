import { Navigation } from "@/components/navigation";
import { LayoutGridDemo } from "@/components/ui/projects";

export default function Projects() {
  return (
    <main className="h-screen p-4">
      <Navigation />
      <div className="h-full py-8 md:py-20">
        <LayoutGridDemo />
      </div>
    </main>
  );
}
