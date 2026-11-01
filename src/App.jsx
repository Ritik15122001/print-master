import { useCallback, useEffect, useRef, useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileActionBar from './components/layout/MobileActionBar';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import BackToTop from './components/layout/BackToTop';
import HeroSection from './components/sections/HeroSection';
import ServicesTicker from './components/sections/ServicesTicker';
import ServicesSection from './components/sections/ServicesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import FeaturedProjectsSection from './components/sections/FeaturedProjectsSection';
import ClientsSection from './components/sections/ClientsSection';
import AboutSection from './components/sections/AboutSection';
import ProcessSection from './components/sections/ProcessSection';
import ContactSection from './components/sections/ContactSection';
import { useScrollPosition } from './hooks/useScrollPosition';
import { scrollToSection } from './utils/scroll';

export default function App() {
  const scrollY = useScrollPosition();
  const [filter, setFilter] = useState('all');
  const [presetService, setPresetService] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const formRef = useRef(null);

  // Section links → filter the portfolio / pre-select a service. Scrolling is handled below.
  const showWork = useCallback((cat) => setFilter(cat), []);
  const requestQuote = useCallback((service) => setPresetService({ value: service, at: Date.now() }), []);

  // Smooth in-page anchor scrolling with the reference's 80px header offset.
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      if (id && scrollToSection(id)) {
        e.preventDefault();
        history.replaceState(null, '', `#${id}`);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Tuck the floating WhatsApp button away while the quote form is on screen.
  useEffect(() => {
    const io = new IntersectionObserver(([en]) => setFormVisible(en.isIntersecting), { threshold: 0.15 });
    if (formRef.current) io.observe(formRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header scrolled={scrollY > 20} />
      <main id="main">
        <HeroSection />
        <ServicesTicker />
        <ServicesSection onSeeWork={showWork} onQuote={requestQuote} />
        <PortfolioSection filter={filter} onFilterChange={setFilter} />
        <FeaturedProjectsSection onSeeWork={showWork} />
        <ClientsSection />
        <AboutSection />
        <ProcessSection />
        <ContactSection presetService={presetService} formRef={formRef} />
      </main>
      <Footer onQuote={requestQuote} />
      <WhatsAppFloat tucked={formVisible} />
      <BackToTop show={scrollY > 800} />
      <MobileActionBar />
    </>
  );
}
