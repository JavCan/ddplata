import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Hero } from './Hero';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-neutral-50/95 backdrop-blur-sm z-50 border-b border-neutral-200">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="text-neutral-900">ddplata</div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors w-full text-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre-mi')}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors w-full text-left"
                >
                  Sobre mí
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('proyectos')}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors w-full text-left"
                >
                  Proyectos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors w-full text-left"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-neutral-200 bg-neutral-50">
        <div className="text-center text-neutral-500 text-sm">
          © 2025 Danna Miranda. Diseño Industrial.
        </div>
      </footer>
    </div>
  );
}
