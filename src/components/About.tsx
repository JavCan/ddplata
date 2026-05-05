import { Link } from 'react-router-dom';
import lago from '../assets/lago.webp';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect } from 'react';

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="px-12 py-8 flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="text-[#a5d6a7] italic font-semibold text-2xl tracking-tighter">ddplata</Link>
          <nav>
            <ul className="flex items-center gap-16 text-[15px] text-neutral-900">
              <li>
                <Link to="/about" className="text-[#a5d6a7]">
                  info
                </Link>
              </li>
              <li>
                <Link to="/archive" className="hover:text-[#a5d6a7] transition-colors">
                  archive
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#a5d6a7] transition-colors">
                  contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-40 pb-20 px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          {/* Text Column */}
          <div className="md:col-span-7 space-y-12">
            <h1 className="text-6xl font-bold text-neutral-900 tracking-tight">Sobre mí</h1>

            <div className="space-y-8 text-[18px] text-neutral-800 leading-snug max-w-xl">
              <p>
                Desde muy pequeña estudié en una escuela enfocada en las artes y en crear un vínculo con la naturaleza, el uso de materiales orgánicos y el cuidado del entorno. Aunque no tenía claro que quería ser diseñadora desde chica, todas mis vivencias y aprendizajes, como clases de barro, madera y tejido me trajeron aquí :)
              </p>
              <p>
                Actualmente curso mi penúltimo año de la carrera de Diseño en el Tecnológico de Monterrey. Ahí he desarrollado habilidades en el trabajo con biomateriales, procesos de manufactura e ideación de mobiliario. También he aprendido sobre herramientas como Rhino 3D, Illustrator, Blender, Indesign y Sketch.
              </p>
              <p>
                Me emociona explorar las siguientes etapas de mi desarrollo como diseñadora, manteniéndome abierta a nuevas experiencias.
              </p>
            </div>

            <div className="pt-5">
              <Link to="/contact" className="text-lg text-neutral-900 underline decoration-1 underline-offset-4 hover:text-[#a5d6a7] transition-colors">
                ¿quieres trabajar conmigo? contáctame :)
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="md:col-span-5 w-full pt-4">
            <div className="relative bg-neutral-100 shadow-sm overflow-hidden">
              <ImageWithFallback
                src={lago}
                alt="Sobre mí"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-black/5 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}