// app/page.jsx (Updated Main Page)
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WhyChooseMe from "@/components/WhyChooseMe";
import Contact from "@/components/Contact";

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

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <WhyChooseMe />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
