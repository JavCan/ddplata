import { useState, useEffect } from 'react';
import { Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <footer className="w-full bg-white px-12 py-8 pb-12 relative z-10">
      <div className="max-w-screen-2xl mx-auto space-y-6">
        {/* Row 1: Icons */}
        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/ddplata/"
            target="_blank"
            className="text-neutral-900 hover:text-[#a5d6a7] transition-colors"
          >
            <Instagram size={32} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/dannamiranda/"
            target="_blank"
            className="text-neutral-900 hover:text-[#a5d6a7] transition-colors"
          >
            <Linkedin size={32} strokeWidth={1.5} />
          </a>

        </div>

        {/* Row 2: Email (Left) and Location/Clock (Right) — all baseline aligned */}
        <div className="flex flex-row justify-between items-baseline w-full">
          <a
            href="mailto:ddplata@outlook.com"
            className="text-[15px] text-neutral-900 font-medium underline underline-offset-2 decoration-1 hover:text-[#a5d6a7] transition-colors"
          >
            ddplata@outlook.com
          </a>

          <div className="flex items-baseline gap-16 md:gap-32 text-[15px] text-neutral-900 font-medium">
            <span className="opacity-90">Ciudad de México, México</span>
            <span className="tabular-nums opacity-90 min-w-[60px] text-right">{formatTime(time)}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
