import { useState, useCallback, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { LenisContext } from './context/LenisContext';
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
import { BackToTop } from './components/BackToTop/BackToTop';

function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaded = useCallback(() => {
    setLoaded(true);
  }, []);

  const lenisRef = useRef<Lenis | null>(null);
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;
    setLenisInstance(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisInstance}>
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
        <BackToTop />
      </div>
    </LenisContext.Provider>
  );
}

export default App;
