import lago from '../assets/lago.webp';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect } from 'react';
import { Header } from './Header';
import { useContact } from '../context/ContactContext';

export function About() {
  const { openContact } = useContact();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-40 pb-20 px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          {/* Text Column */}
          <div className="md:col-span-7 space-y-8">
            <h1 className="text-6xl font-bold text-neutral-900 tracking-tight font-bristol">Sobre mí</h1>

            <div className="space-y-6 text-[18px] text-neutral-800 leading-snug max-w-xl">
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

            <div className="space-y-6 pt-10">
              <p className="text-lg font-medium text-neutral-900">Te dejo algunas publicaciones en las que he sido mencionada!!</p>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.dezeen.com/2026/04/02/interactive-table-lamp-instituto-tecnologico-y-de-estudios-superiores-de-monterrey-schoolshows/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff5c9d] hover:text-[#a5d6a7] underline decoration-1 underline-offset-4 transition-colors"
                  >
                    Pedir un Deseo – Dezeen
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/p/DXfXwHSlbet/?utm_source=ig_web_copy_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff5c9d] hover:text-[#a5d6a7] underline decoration-1 underline-offset-4 transition-colors"
                  >
                    Mexicanos en Milán – Designaholic
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-10">
              <button 
                onClick={openContact}
                className="text-lg text-neutral-900 underline decoration-1 underline-offset-4 hover:text-[#ff5c9d] transition-colors cursor-pointer"
              >
                Contáctame :)
              </button>
            </div>
          </div>

          {/* Image Column */}
          <div className="md:col-span-5 w-full pt-23">
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