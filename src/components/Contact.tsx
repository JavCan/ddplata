import { Mail, Instagram, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacto" className="px-6 py-16 bg-neutral-100">
      <div className="max-w-lg mx-auto w-full text-left">
        <h2 className="text-neutral-900 mb-8">Contacto</h2>
        <div className="space-y-6">
          <p className="text-neutral-600 leading-relaxed">
            Interesado en colaborar o conocer más sobre mi trabajo? No dudes en contactarme.
          </p>
          <div className="space-y-4">
            <a
              className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <Mail size={20} />
              <span>ddplata@outlook.com</span>
            </a>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.instagram.com/ddplata/"
                target="_blank"
                className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/dannamiranda/"
                target="_blank"
                className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
