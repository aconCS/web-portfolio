import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import TopNav from './components/TopNav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutSection from './components/sections/AboutSection';
import EducationSection from './components/sections/EducationSection';
import ToolsSection from './components/sections/ToolsSection';
import DesignsSection from './components/sections/DesignsSection';
import CTFSection from './components/sections/CTFSection';

const sections = [
  { id: 'about', label: 'About', component: AboutSection },
  { id: 'education', label: 'Education', component: EducationSection },
  { id: 'tools', label: 'Tools', component: ToolsSection },
  { id: 'designs', label: 'Designs', component: DesignsSection },
  { id: 'ctf', label: 'CTF', component: CTFSection },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const isClickScrolling = useRef(false);

  const scrollToSection = useCallback((id: string) => {
    const el = sectionRefs.current.get(id);
    if (el) {
      isClickScrolling.current = true;
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      window.addEventListener('scrollend', () => {
        isClickScrolling.current = false;
      }, { once: true });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const viewportH = window.innerHeight;
      const threshold = viewportH * 0.4;

      for (const section of sections) {
        const el = sectionRefs.current.get(section.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold) {
          setActiveSection((prev) => (prev !== section.id ? section.id : prev));
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (id: string) => {
      scrollToSection(id);
    },
    [scrollToSection]
  );

  return (
    <div className="bg-secondary-white text-primary-brown selection:bg-accent-orange/20">
      <TopNav sections={sections} activeSection={activeSection} onNavClick={handleNavClick} />

      <section className="min-h-screen flex flex-col items-center justify-center px-5 md:px-10 lg:px-14 pt-16 md:pt-20 snap-start relative">
        <div className="max-w-5xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary-brown/30">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-14">
        {sections.map(({ id, component: Component }) => (
          <section
            key={id}
            id={id}
            ref={(el) => {
              if (el) sectionRefs.current.set(id, el);
            }}
            className="min-h-screen flex items-center justify-center snap-start"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: '-25% 0px -25% 0px' }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <Component />
            </motion.div>
          </section>
        ))}
      </div>

      <Footer />

      <div className="fixed bottom-5 left-5 md:left-10 lg:left-14 z-40 font-kanit font-light text-sm md:text-base text-primary-brown/50 leading-normal pointer-events-none">
        Available for freelance or employment
      </div>
    </div>
  );
}
