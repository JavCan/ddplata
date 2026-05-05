import { Link } from 'react-router-dom';
import pedirUnDeseo from '../assets/pedir_un_deseo.webp';
import servilletero from '../assets/servilletero.webp';
import libelula from '../assets/libelula.webp';
import pedirUnDeseo1 from '../assets/pedir_un_deseo1.webp';
import servilletero1 from '../assets/servilletero1.webp';
import { motion } from 'framer-motion';

const archiveItems = [
  {
    id: 1,
    slug: 'pedir-un-deseo',
    image: pedirUnDeseo1, // Top-left-ish (PRODUCE-like position)
    style: { top: '30%', left: '32%', width: '120px' }
  },
  {
    id: 2,
    slug: 'seres-mutantes',
    image: libelula, // Top-center-ish (Toy position)
    style: { top: '28%', left: '46%', width: '160px' }
  },
  {
    id: 3,
    slug: 'amanecer',
    image: servilletero1, // Center-right-ish (Bowl position)
    style: { top: '42%', left: '58%', width: '180px' }
  },
  {
    id: 4,
    slug: 'pedir-un-deseo',
    image: pedirUnDeseo, // Center-left-ish (Wooden slats position)
    style: { top: '50%', left: '40%', width: '110px' }
  },
  {
    id: 5,
    slug: 'amanecer',
    image: servilletero, // Bottom-center-ish (Box position)
    style: { top: '55%', left: '50%', width: '140px' }
  }
];

export function Archive() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="px-12 py-8 flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="text-[#a5d6a7] italic font-semibold text-2xl tracking-tighter">ddplata</Link>
          <nav>
            <ul className="flex items-center gap-16 text-[15px] text-neutral-900">
              <li>
                <Link to="/" className="hover:text-[#a5d6a7] transition-colors">info</Link>
              </li>
              <li>
                <Link to="/archive" className="font-bold border-b border-black pb-1">archive</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#a5d6a7] transition-colors">contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

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
