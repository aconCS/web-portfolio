import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logotypeSvg from '../assets/logotype.svg';

interface SectionInfo {
  id: string;
  label: string;
}

interface TopNavProps {
  sections: SectionInfo[];
  activeSection: string;
  onNavClick: (section: string) => void;
}

export default function TopNav({ sections, activeSection, onNavClick }: TopNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[20px] md:px-[50px] lg:px-[80px] py-[10px] h-[100px] bg-secondary-white/80 backdrop-blur-sm">
      <button
        onClick={() => onNavClick('about')}
        className="h-[31px] w-[123px] shrink-0 relative cursor-pointer"
        aria-label="Home"
      >
        <img src={logotypeSvg} alt="" className="h-full w-auto object-contain" />
      </button>

      <div className="hidden lg:flex items-center font-kanit font-light text-[20px] text-primary-brown leading-[normal] shrink-0">
        Available for freelance or employment
      </div>

      <div className="hidden md:flex lg:hidden items-center font-kanit text-[18px] text-primary-brown leading-[normal] shrink-0">
        {sections.map((section, i) => (
          <span key={section.id}>
            {i > 0 && <span className="mx-1 shrink-0 font-light opacity-50">.</span>}
            <button
              onClick={() => onNavClick(section.id)}
              className={`whitespace-nowrap cursor-pointer hover:opacity-100 ${activeSection === section.id ? 'font-black text-[20px]' : 'font-light opacity-50'}`}
            >
              {section.label}
            </button>
          </span>
        ))}
      </div>

      <button
        className="flex md:hidden flex-col gap-[5px] p-2 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <motion.span
          className="block w-[22px] h-[1.5px] bg-primary-brown"
          animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block w-[22px] h-[1.5px] bg-primary-brown"
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block w-[22px] h-[1.5px] bg-primary-brown"
          animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
        />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 top-[100px] bg-secondary-white z-40 flex flex-col items-center justify-center gap-[30px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => {
                  onNavClick(section.id);
                  setMenuOpen(false);
                }}
                className={`font-kanit leading-[normal] cursor-pointer select-none ${
                  activeSection === section.id
                    ? 'font-black text-[28px] text-primary-brown'
                    : 'font-light text-[24px] text-primary-brown opacity-60'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                {section.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
