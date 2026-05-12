import { Link } from 'react-router-dom';
import bebeImg from '../assets/bebe.webp';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="inicio" className="px-12 py-16 min-h-[60vh] flex flex-col items-center justify-center max-w-4xl mx-auto text-center space-y-12 relative z-10">

      {/* Title */}
      <div className='pb-6 pt-10'>
        <h1 className="text-5xl font-bold text-neutral-900 tracking-tight font-bristol">
          yo
        </h1>
      </div>

      {/* Baby Photo */}
      <div className="relative w-30 h-42 flex items-center justify-center pb-4">
        <div className="w-full h-full">
          <ImageWithFallback
            src={bebeImg}
            alt="Danna de bebé"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Description */}
      <div className="max-w-2xs space-y-8">
        <p className="text-[20px] text-justify leading-snug font-medium">
          Soy estudiante de diseño industrial, interesada en desarrollar diseños conscientes, sustentables y con impacto social positivo.
        </p>

        <div className="pt-4">
          <Link to="/about" className="text-xl text-neutral-900 underline decoration-1 underline-offset-8 hover:text-[#ff5c9d] transition-colors">
            más sobre mí y mi trayectoria :)
          </Link>
        </div>
      </div>

    </section>
  );
}
