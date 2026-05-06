import { AsciiStars } from './AsciiStars';
import { Link } from 'react-router-dom';
import infoImg from '../assets/info.webp';
import bebeImg from '../assets/bebe.webp';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="inicio" className="px-12 py-16 min-h-[70vh] flex flex-col justify-center max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">

        {/* Left Column */}
        <div className="space-y-12">
          <div>
            <h1 className="text-6xl font-bold text-neutral-900 tracking-tight font-bristol">
              yo
            </h1>
          </div>

          <div className="max-w-md">
            <p className="text-[22px] text-neutral-900 leading-snug">
              Soy estudiante de diseño industrial, interesada en desarrollar diseños conscientes, sustentables y con impacto social positivo.
            </p>
          </div>

          <div className="pt-8">
            <Link to="/about" className="text-lg text-neutral-900 underline decoration-1 underline-offset-4 hover:text-[#a5d6a7] transition-colors">
              más sobre mí y mi trayectoria :)
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative h-[600px] flex items-center justify-center">

          {/* Passport/Document Card */}
          <div className="relative z-10 w-[380px] h-[480px] rotate-[-2deg]">
            {/* Background Info Image */}
            <ImageWithFallback
              src={infoImg}
              alt="Info card"
              className="w-full h-full object-contain"
            />

            {/* Overlaid Baby Photo with Paperclip */}
            <div className="absolute top-[320px] left-[100px] translate-x-12">
              <div className="relative">
                <div className="aspect-[auto] bg-white shadow-md overflow-hidden rotate-4">
                  <ImageWithFallback
                    src={bebeImg}
                    alt="Bebé"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Paperclip simulation 
                <div className="absolute -top-4 -right-[-40px] w-4 h-12 border-2 border-neutral-400 rounded-full rotate-[30deg] z-20 bg-transparent"></div>
                */}
              </div>
            </div>
          </div>

          {/* ASCII Stars Overlay */}
          <div className="absolute top-10 right-0 md:-right-16 z-20 pointer-events-none">
            <AsciiStars />
          </div>
        </div>

      </div>
    </section>
  );
}
