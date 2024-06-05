import { ContactForm } from "@/components/form";
import { Globe } from "@/components/magicui/globe";
import { Navigation } from "@/components/navigation";

export default function Contact() {
  return (
    <main className="p-4 h-screen">
      <Navigation />
      <div className="flex flex-col sm:flex-row gap-8 max-w-2xl mx-auto items-center py-8 md:py-40">
          <Globe />
        <ContactForm />
      </div>
    </main>
  );
}
