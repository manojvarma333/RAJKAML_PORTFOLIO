import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black antialiased">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
