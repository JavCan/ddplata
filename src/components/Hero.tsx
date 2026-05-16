import { Link } from 'react-router-dom';
import bebeImg from '../assets/bebe.webp';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="inicio" className="px-12 pt-12 pb-4 xs:py-8 min-h-[60vh] flex flex-col items-center justify-center max-w-4xl mx-auto text-center space-y-1 relative z-10">

      {/* Title */}
      <div className='pb-1 pt-10'>
        <h1 className="text-5xl font-bold text-neutral-900 tracking-tight font-bristol">
          yo
        </h1>
      </div>

      {/* Baby Photo */}
      <div className="relative flex items-center justify-center pb-1 
                w-[200px] h-[280px] 
                min-[480px]:w-[300px] min-[480px]:h-[420px]">
        <div className="w-full h-full">
          <ImageWithFallback
            src={bebeImg}
            alt="Danna de bebé"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Description */}
      <div className="w-[200px] xs:w-[300px]">
        <p className="text-[16px] xs:text-[20px] text-justify leading-snug font-medium">
          Soy estudiante de diseño industrial, interesada en desarrollar diseños conscientes, sustentables y con impacto social positivo.
        </p>

        <div className="pt-10 ">
          <Link to="/about" className="text-[14px] xs:text-xl text-neutral-900 underline decoration-1 underline-offset-8 hover:text-[#ff5c9d] transition-colors">
            más sobre mí y mi trayectoria :)
          </Link>
        </div>
      </div>

    </section>
  );
}
