import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Chairman } from './components/Chairman/Chairman';
import { Companies } from './components/Companies/Companies';
import { Clients } from './components/Clients/Clients';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Chairman />
      <Companies />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
