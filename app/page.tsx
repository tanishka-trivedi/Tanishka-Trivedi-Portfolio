import Starfield from "@/app/Starfield";
import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import About        from "@/components/About";
//import Education    from "@/components/Education";
import Experience   from "@/components/Experience";
import Projects     from "@/components/Projects";
import Skills       from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact      from "@/components/Contact";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Starfield />
      <div className="nebula-bg" aria-hidden="true" />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        {/* <Education />  */}
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}