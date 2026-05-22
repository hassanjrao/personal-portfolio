import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import FiverrReviews from "@/components/FiverrReviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Services />
      <Portfolio />
      <FiverrReviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
