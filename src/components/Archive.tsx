import { Link } from 'react-router-dom';
import { Header } from './Header';
import libelula from '../assets/libelula.webp';
import pedirUnDeseo1 from '../assets/pedir_un_deseo1.webp';
import servilletero1 from '../assets/servilletero1.webp';
import toko1 from '../assets/toko1.webp';
import racejournal1 from '../assets/racejournal1.webp';
import performance from '../assets/performance.webp';
import tallerVertical1 from '../assets/tallerVertical1.webp';
import memo from '../assets/memo.webp';

import { motion } from 'framer-motion';
import { StarBackground } from './StarBackground';
import { useEffect, useState } from 'react';

const archiveItems = [
  {
    id: 1,
    slug: 'pedir-un-deseo',
    image: pedirUnDeseo1,
    style: { top: '15%', left: '15%', width: '220px' },
    styleMobile: { top: '10%', left: '5%', width: '110px' }
  },
  {
    id: 2,
    slug: 'seres-mutantes',
    image: libelula,
    style: { top: '10%', left: '42%', width: '280px' },
    styleMobile: { top: '10%', left: '48%', width: '140px' }
  },
  {
    id: 3,
    slug: 'amanecer',
    image: servilletero1,
    style: { top: '25%', left: '68%', width: '260px' },
    styleMobile: { top: '25%', left: '60%', width: '130px' }
  },
  {
    id: 5,
    slug: 'toko',
    image: toko1,
    style: { top: '33%', left: '40%', width: '260px' },
    styleMobile: { top: '36%', left: '20%', width: '130px' }
  },
  {
    id: 6,
    slug: 'race-journal',
    image: racejournal1,
    style: { top: '73%', left: '15%', width: '240px' },
    styleMobile: { top: '69%', left: '5%', width: '120px' }
  },
  {
    id: 7,
    slug: 'performance',
    image: performance,
    style: { top: '50%', left: '10%', width: '260px' },
    styleMobile: { top: '53%', left: '5%', width: '130px' }
  },
  {
    id: 8,
    slug: 'taller-vertical',
    image: tallerVertical1,
    style: { top: '56%', left: '70%', width: '240px' },
    styleMobile: { top: '49%', left: '55%', width: '120px' }
  },
  {
    id: 9,
    slug: 'memo',
    image: memo,
    style: { top: '59%', left: '43%', width: '220px' },
    styleMobile: { top: '75%', left: '52%', width: '110px' }
  }
];

export function Archive() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 480);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 480);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="min-h-screen bg-transparent relative">
      <div className="fixed inset-0 bg-white z-[-10]" />
      <StarBackground />
      <Header />

      <main className="relative w-full min-h-[115vh]">
        {archiveItems.map((item) => {
          const activeStyle = isMobile ? item.styleMobile : item.style;
          return (
            <motion.div
              key={`${item.slug}-${isMobile ? 'mobile' : 'desktop'}`}
              className="absolute"
              style={activeStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.id * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
            >
              <Link to={`/${item.slug}`} className="block">
                <img
                  src={item.image}
                  alt={item.slug}
                  className="w-full h-auto object-contain transition-transform duration-300"
                />
              </Link>
            </motion.div>
          );
        })}
      </main>
    </div>
  );
}