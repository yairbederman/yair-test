import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import PracticeAreas from './components/PracticeAreas';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-white selection:bg-gold-200 selection:text-navy-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <PracticeAreas />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
