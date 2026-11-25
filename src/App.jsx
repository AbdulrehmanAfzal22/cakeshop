import { useRef, useState } from 'react';
import CakeCollection from './components/CakeCollection.jsx';
import DesignDialog from './components/DesignDialog.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import LoveGallery from './components/LoveGallery.jsx';
import Newsletter from './components/Newsletter.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';

export default function App() {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const openerRef = useRef(null);

  function openDesign(product, opener) {
    openerRef.current = opener;
    setSelectedDesign(product);
  }

  function closeDesign() {
    setSelectedDesign(null);
    openerRef.current?.focus();
  }

  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <CakeCollection onSelect={openDesign} />
        <WhyChooseUs />
        <LoveGallery />
        <Newsletter />
      </main>
      <Footer />
      <DesignDialog product={selectedDesign} onClose={closeDesign} />
    </div>
  );
}
