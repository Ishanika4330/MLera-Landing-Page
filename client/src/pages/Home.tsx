import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(262_51%_12%)] text-white font-sans selection:bg-[hsl(264_100%_62%)]/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
