import { useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import starImg from '../assets/star.webp';

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
  shouldTwinkle: boolean;
}

// CONFIGURATION: Adjust the probability of stars twinkling (0 to 1)
// 0.7 means 70% twinkle, 30% stay still
const TWINKLE_PROBABILITY = 0.7;

export function StarBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const { scrollY } = useScroll();

  // Parallax effect: stars move at a fraction of the scroll speed
  const y = useTransform(scrollY, (value) => value * 0.2);

  useEffect(() => {
    // Generate stars using a grid to ensure even distribution
    // Increased grid density for smaller stars
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const columns = isMobile ? 3 : 6;
    const rows = isMobile ? 3 : 6;
    const newStars: Star[] = [];
    let id = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        const countInCell = Math.random() > 0.4 ? 2 : 1;
        for (let i = 0; i < countInCell; i++) {
          const baseTop = (r / rows) * 100;
          const baseLeft = (c / columns) * 100;

          newStars.push({
            id: id++,
            top: `${baseTop + Math.random() * (100 / rows)}%`,
            left: `${baseLeft + Math.random() * (100 / columns)}%`,
            size: 8 + Math.random() * 10, // Smaller stars (4px to 12px)
            delay: `${Math.random() * 5}s`,
            duration: `${3 + Math.random() * 5}s`,
            shouldTwinkle: Math.random() < TWINKLE_PROBABILITY,
          });
        }
      }
    }
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-[-1] overflow-hidden">
      <motion.div
        style={{ y }}
        className="relative w-full h-full"
      >
        {stars.map((star) => (
          <img
            key={star.id}
            src={starImg}
            alt=""
            className={`absolute opacity-100 ${star.shouldTwinkle ? 'animate-pulse-star' : ''}`}
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: 'auto',
              animationDelay: star.shouldTwinkle ? star.delay : undefined,
              animationDuration: star.shouldTwinkle ? star.duration : undefined,
            }}
          />
        ))}
      </motion.div>
      <style>{`
        @keyframes pulse-star {
          0%, 100% { transform: scale(0.8); opacity: 1; }
          50% { transform: scale(1.5); opacity: 1; }
        }
        .animate-pulse-star {
          animation: pulse-star infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
