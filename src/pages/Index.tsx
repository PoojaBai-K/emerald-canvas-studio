import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Projects />
        <Skills />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
