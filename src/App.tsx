import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import TopNav from './components/TopNav';
import Hero from './components/Hero';
import SectionNav from './components/SectionNav';
import Footer from './components/Footer';
import AboutSection from './components/sections/AboutSection';
import EducationSection from './components/sections/EducationSection';
import ToolsSection from './components/sections/ToolsSection';
import DesignsSection from './components/sections/DesignsSection';
import CTFSection from './components/sections/CTFSection';
import PicsSection from './components/sections/PicsSection';

const sections = [
  { id: 'about', label: 'About', component: AboutSection },
  { id: 'education', label: 'Education', component: EducationSection },
  { id: 'tools', label: 'Tools', component: ToolsSection },
  { id: 'designs', label: 'Designs', component: DesignsSection },
  { id: 'ctf', label: 'CTF', component: CTFSection },
  { id: 'pics', label: 'Pics', component: PicsSection },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isTooSmall, setIsTooSmall] = useState(false);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 380px)');
    setIsTooSmall(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsTooSmall(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = sectionRefs.current.get(id);
    if (el) {
      isClickScrolling.current = true;
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
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

  if (isTooSmall) {
    return (
      <div className="bg-secondary-white text-primary-brown min-h-screen flex items-center justify-center px-[30px]">
        <div className="text-center">
          <p className="font-hitmo font-bold text-[32px] text-primary-brown">work in progress</p>
          <p className="font-kanit font-light text-[16px] text-primary-brown/50 mt-[12px]">
            this site isn&apos;t ready for your screen size yet.<br />
            please view on a larger device.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary-white text-primary-brown selection:bg-accent-orange/20">
      <TopNav sections={sections} activeSection={activeSection} onNavClick={handleNavClick} />

      <section className="min-h-screen flex flex-col items-center justify-center px-[20px] md:px-[40px] lg:px-[50px] pt-[100px] snap-start relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <Hero />
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-[160px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 0%, #fff5e7 100%)' }} />
        <motion.div
          className="absolute bottom-[40px] left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary-brown/30">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </section>

      <div className="flex px-[20px] md:px-[40px] lg:px-[50px] gap-[5px] md:gap-[10px]">
        <aside className="sticky top-[100px] h-[calc(100vh-100px)] flex items-center shrink-0 hidden lg:flex">
          <SectionNav
            sections={sections}
            activeSection={activeSection}
            onSectionClick={handleNavClick}
          />
        </aside>

        <div className="flex-1 min-w-0 px-[10px] md:px-[20px] lg:px-[30px]">
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
              >
                <Component />
              </motion.div>
            </section>
          ))}
        </div>
      </div>

      <Footer />

      <div className="fixed bottom-[20px] left-[20px] md:left-[40px] lg:left-[50px] z-40 font-kanit font-light text-[14px] md:text-[16px] text-primary-brown/50 leading-[normal] lg:hidden pointer-events-none">
        Available for freelance or employment
      </div>
    </div>
  );
}
