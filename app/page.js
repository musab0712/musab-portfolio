// app/page.jsx (Updated Main Page)
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WhyChooseMe from "@/components/WhyChooseMe";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import AboutMe from "@/components/AboutMe";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="tech-stack">
        <TechStack />
      </section>

      <section id="projects">
        <Projects />
      </section>

      {/* <section id="about">
        <AboutMe />
      </section> */}

      <section id="about">
        <About />
        {/* <WhyChooseMe /> */}
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="services">
        <Services />
      </section>
    </>
  );
}
