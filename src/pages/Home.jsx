import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
