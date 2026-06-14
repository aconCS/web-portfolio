import { motion } from 'framer-motion';

interface SectionNavProps {
  sections: { id: string; label: string }[];
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export default function SectionNav({ sections, activeSection, onSectionClick }: SectionNavProps) {
  return (
    <div className="flex flex-col gap-[30px] py-[10px] shrink-0 text-left whitespace-nowrap">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <motion.button
            key={section.id}
            onClick={() => onSectionClick(section.id)}
            className="flex flex-col items-start justify-center shrink-0 cursor-pointer select-none outline-none leading-[normal]"
            animate={{
              scale: isActive ? 1.1 : 1,
              opacity: isActive ? 1 : 0.5,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 24,
              mass: 0.8,
            }}
            whileHover={{ opacity: 1 }}
            style={{ originX: 0 }}
          >
            <span
              className={
                isActive
                  ? 'font-kanit font-black text-[24px] text-primary-brown'
                  : 'font-kanit font-light text-[20px] text-primary-brown'
              }
            >
              {section.label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
