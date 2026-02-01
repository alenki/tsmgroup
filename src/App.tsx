import { useState, useCallback, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { PageLoader } from './components/PageLoader/PageLoader';
import { CustomCursor } from './components/CustomCursor/CustomCursor';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { StatsCounter } from './components/StatsCounter/StatsCounter';
import { Chairman } from './components/Chairman/Chairman';
import { Companies } from './components/Companies/Companies';
import { Clients } from './components/Clients/Clients';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaded = useCallback(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <PageLoader onComplete={handleLoaded} />
      <CustomCursor />
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <Navbar />
        <Hero />
        <About />
        <StatsCounter />
        <Chairman />
        <Companies />
        <Clients />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
