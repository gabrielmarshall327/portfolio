import Navbar from "@/components/navbar";
import Socials from "@/components/socials";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col text-white bg-darkbg">
      <Navbar />
      <Socials />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
