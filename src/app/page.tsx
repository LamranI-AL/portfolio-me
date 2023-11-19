import About from "@/components/About";
import Activities from "@/components/Activities";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section>
        <Activities />
      </section>
      <section>
        <Projects />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </div>
  );
}
