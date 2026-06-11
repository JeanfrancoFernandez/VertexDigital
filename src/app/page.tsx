import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { LanguageProvider } from "@/context/LanguageContext";
import { useMessages } from "@/hooks/useMessages";

export default function Home() {
  return (
    <main className="min-w-0 overflow-x-clip">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Projects />
      <Contact />
      <Footer /> 
    </main>   
  );
}