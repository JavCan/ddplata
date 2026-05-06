import { Link } from 'react-router-dom';
import { Header } from './Header';
import pedirUnDeseo from '../assets/pedir_un_deseo.webp';
import servilletero from '../assets/servilletero.webp';
import libelula from '../assets/libelula.webp';
import pedirUnDeseo1 from '../assets/pedir_un_deseo1.webp';
import servilletero1 from '../assets/servilletero1.webp';
import toko1 from '../assets/toko1.webp';
import racejournal1 from '../assets/racejournal1.webp';
import { motion } from 'framer-motion';

const archiveItems = [
  {
    id: 1,
    slug: 'pedir-un-deseo',
    image: pedirUnDeseo1,
    style: { top: '25%', left: '15%', width: '220px' }
  },
  {
    id: 2,
    slug: 'seres-mutantes',
    image: libelula,
    style: { top: '20%', left: '42%', width: '280px' }
  },
  {
    id: 3,
    slug: 'amanecer',
    image: servilletero1,
    style: { top: '35%', left: '68%', width: '260px' }
  },
  {
    id: 5,
    slug: 'toko',
    image: toko1,
    style: { top: '60%', left: '40%', width: '260px' }
  },
  {
    id: 6,
    slug: 'race-journal',
    image: racejournal1,
    style: { top: '65%', left: '70%', width: '240px' }
  }
];

export function Archive() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Scattered Projects */}
      <main className="relative w-full h-screen overflow-hidden pt-24">
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
