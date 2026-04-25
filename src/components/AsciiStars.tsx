import { useEffect, useState } from 'react';

const STARS_ART = `
                .
               . .
          . . .   . . . 
           .         .
            .       .
           .         .             .
          .           .           . .
                             . . .   . . .
                              .         .
                               .       .
                              .         .
             .               .           .
            . .
       . . .   . . .
        .         .
         .       .
        .         .
       .           .
`;

export function AsciiStars() {
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set());

  useEffect(() => {
    const totalChars = STARS_ART.length;
    const interval = setInterval(() => {
      setVisibleIndexes(prev => {
        const next = new Set(prev);
        // Reveal 3 random characters at a time
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * totalChars);
          next.add(randomIndex);
        }
        if (next.size >= totalChars) {
          clearInterval(interval);
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-neutral-400 text-[10px] leading-tight whitespace-pre select-none" aria-hidden="true">
      {STARS_ART.split('').map((char, index) => (
        <span 
          key={index}
          className={`transition-opacity duration-500 ${visibleIndexes.has(index) ? 'opacity-100' : 'opacity-0'}`}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
