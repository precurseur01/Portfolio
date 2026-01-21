import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DigitalStrategy from './components/DigitalStrategy';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <DigitalStrategy />
        <Contact />
        <FloatingWhatsAppButton />
      </main>
      <Footer />
    </div>
  );
}

export default App;