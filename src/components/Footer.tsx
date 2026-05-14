import { useState, useEffect } from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const footerStyles = `
  .footer-root {
    width: 100%;
    background: white;
    position: relative;
    z-index: 10;
    padding: 1rem 0.75rem 1.5rem;
  }
  .footer-mobile { display: flex; }
  .footer-desktop { display: none; }

  @media (min-width: 480px) {
    .footer-root { padding: 2rem 3rem 3rem; }
    .footer-mobile { display: none; }
    .footer-desktop { display: block; }
  }
`;

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
    <>
      <style>{footerStyles}</style>

      <footer className="footer-root">
        <div className="max-w-screen-2xl mx-auto">

          {/* MOBILE <480px */}
          <div className="footer-mobile flex-col gap-2 text-[10px] text-neutral-900 font-medium">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a href="https://www.instagram.com/ddplata/" target="_blank" rel="noopener noreferrer"
                  className="text-neutral-900 hover:text-[#a5d6a7] transition-colors">
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
                <a href="https://www.linkedin.com/in/dannamiranda/" target="_blank" rel="noopener noreferrer"
                  className="text-neutral-900 hover:text-[#a5d6a7] transition-colors">
                  <Linkedin size={20} strokeWidth={1.5} />
                </a>
              </div>
              <span className="tabular-nums opacity-90">{formatTime(time)}</span>
            </div>

            <div className="flex items-center justify-between">
              <a href="mailto:ddplata@outlook.com"
                className="underline underline-offset-2 decoration-1 hover:text-[#a5d6a7] transition-colors">
                ddplata@outlook.com
              </a>
              <span className="opacity-90 text-right">Ciudad de México, México</span>
            </div>
          </div>

          {/* DESKTOP >=480px */}
          <div className="footer-desktop space-y-6">
            <div className="flex items-center gap-2">
              <a href="https://www.instagram.com/ddplata/" target="_blank" rel="noopener noreferrer"
                className="text-neutral-900 hover:text-[#a5d6a7] transition-colors">
                <Instagram size={32} strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/dannamiranda/" target="_blank" rel="noopener noreferrer"
                className="text-neutral-900 hover:text-[#a5d6a7] transition-colors">
                <Linkedin size={32} strokeWidth={1.5} />
              </a>
            </div>

            <div className="flex flex-row justify-between items-baseline w-full">
              <a href="mailto:ddplata@outlook.com"
                className="text-[15px] text-neutral-900 font-medium underline underline-offset-2 decoration-1 hover:text-[#a5d6a7] transition-colors">
                ddplata@outlook.com
              </a>
              <div className="flex items-baseline gap-16 md:gap-32 text-[15px] text-neutral-900 font-medium">
                <span className="opacity-90">Ciudad de México, México</span>
                <span className="tabular-nums opacity-90 min-w-[60px] text-right">{formatTime(time)}</span>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}