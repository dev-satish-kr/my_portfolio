import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Projects />
        <Services />
        <Testimonial />
        <Skills />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;