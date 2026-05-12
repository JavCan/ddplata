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

const archiveItems = [
  {
    id: 1,
    slug: 'pedir-un-deseo',
    image: pedirUnDeseo1,
    style: { top: '15%', left: '15%', width: '220px' }
  },
  {
    id: 2,
    slug: 'seres-mutantes',
    image: libelula,
    style: { top: '10%', left: '42%', width: '280px' }
  },
  {
    id: 3,
    slug: 'amanecer',
    image: servilletero1,
    style: { top: '25%', left: '68%', width: '260px' }
  },
  {
    id: 5,
    slug: 'toko',
    image: toko1,
    style: { top: '33%', left: '40%', width: '260px' }
  },
  {
    id: 6,
    slug: 'race-journal',
    image: racejournal1,
    style: { top: '70%', left: '15%', width: '240px' }
  },
  {
    id: 7,
    slug: 'performance',
    image: performance,
    style: { top: '50%', left: '10%', width: '260px' }
  },
  {
    id: 8,
    slug: 'taller-vertical',
    image: tallerVertical1,
    style: { top: '53%', left: '70%', width: '240px' }
  },
  {
    id: 9,
    slug: 'memo',
    image: memo,
    style: { top: '56%', left: '43%', width: '220px' }
  }
];

export function Archive() {
  return (
    <div className="min-h-screen bg-transparent">
      <StarBackground />
      <Header />

      {/* Scattered Projects */}
      <main className="relative w-full min-h-[120vh]">http://localhost:5173/race-journal
        {archiveItems.map((item) => (
          <motion.div
            key={`${item.id}-${item.slug}`}
            className="absolute"
            style={item.style}
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
        ))}
      </main>
    </div>
  );
}
