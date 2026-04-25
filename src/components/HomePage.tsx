import { Hero } from './Hero';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from './Footer';

export function HomePage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="px-12 py-8 flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-[#a5d6a7] italic font-semibold text-2xl tracking-tighter">ddplata</div>
          <nav>
            <ul className="flex items-center gap-16 text-[15px] text-neutral-900">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="hover:text-[#a5d6a7] transition-colors"
                >
                  info
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('proyectos')}
                  className="hover:text-[#a5d6a7] transition-colors"
                >
                  archive
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="hover:text-[#a5d6a7] transition-colors"
                >
                  contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-5">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
