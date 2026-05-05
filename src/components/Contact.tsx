import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AsciiStars } from './AsciiStars';
import { Footer } from './Footer';

export function Contact() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [body]);

  const validateEmail = (email: string) => {
    return /^[\w.!#$%&’*+/=?^_`{|}~-]+@[\w-]+\.[\w.-]+$/i.test(email);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    setPhone(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Por favor ingresa un correo válido');
      return;
    }
    setEmailError('');

    if (!subject) return;

    setLoading(true);
    setStatus('idle');

    try {
      // Consistencia con ProjectDetail.tsx usando VITE_API_BASE_URL
      const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/send-contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, phone, subject, body }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setPhone('');
        setSubject('');
        setBody('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="px-12 py-8 flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="text-[#a5d6a7] italic font-semibold text-2xl tracking-tighter">ddplata</Link>
          <nav>
            <ul className="flex items-center gap-16 text-[15px] text-neutral-900">
              <li>
                <Link to="/" className="hover:text-[#a5d6a7] transition-colors">info</Link>
              </li>
              <li>
                <Link to="/archive" className="hover:text-[#a5d6a7] transition-colors">archive</Link>
              </li>
              <li>
                <Link to="/contact" className="font-bold border-b border-black pb-1">contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        <section id="contacto" className="px-12 py-16 min-h-[70vh] flex flex-col justify-center max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">

            {/* Left Column (Same as Hero) */}
            <div className="space-y-12">
              <div>
                <h1 className="text-6xl font-bold text-neutral-900 tracking-tight">
                  yo.
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

            {/* Right Column: Contact Form */}
            <div className="relative h-[700px] flex items-center justify-center">

              {/* Blurred Background Passport */}
              <div className="absolute inset-0 flex items-center justify-center opacity-40 blur-[6px] pointer-events-none">
                <div className="relative z-10 bg-[#f4f2ef] w-[380px] h-[480px] shadow-sm p-8 flex flex-col rotate-[-2deg]">
                  <div className="border-b border-neutral-300 pb-2 mb-6">
                    <span className="text-[10px] font-bold text-neutral-500 tracking-widest">YOUR PASSPORT PHOTO</span>
                  </div>
                  <div className="relative ml-auto mr-4 mt-2">
                    <div className="w-32 h-40 bg-[#e0deda] border-4 border-white shadow-md flex items-center justify-center text-neutral-400 rotate-3"></div>
                    <div className="absolute -top-4 -right-2 w-4 h-12 border-2 border-neutral-400 rounded-full rotate-[30deg]"></div>
                  </div>
                  <div className="mt-auto border-t border-neutral-300 pt-4">
                    <span className="text-[10px] font-bold text-neutral-500 tracking-widest">TELL US ABOUT YOUR STORY</span>
                    <div className="h-px bg-neutral-300 mt-6 w-full"></div>
                    <div className="h-px bg-neutral-300 mt-6 w-full"></div>
                  </div>
                </div>
              </div>

              {/* Contact Form Overlay */}
              <div className="relative z-30 w-full max-w-[360px] ml-4">
                <form onSubmit={handleSubmit} className="flex flex-col">
                  <div className="space-y-10">
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email*"
                        required
                        className={`w-full bg-transparent border-b ${emailError ? 'border-red-400' : 'border-[#a89b91]'} focus:border-neutral-900 outline-none pb-1 text-[#a89b91] placeholder:text-[#a89b91] placeholder:font-bold font-bold transition-colors`}
                      />
                      {emailError && <p className="absolute text-[10px] text-red-500 mt-1 font-bold">{emailError}</p>}
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="Phone"
                        className="w-full bg-transparent border-b border-[#a89b91] focus:border-neutral-900 outline-none pb-1 text-[#a89b91] placeholder:text-[#a89b91] placeholder:font-bold font-bold transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Subject*"
                        required
                        className="w-full bg-transparent border-b border-[#a89b91] focus:border-neutral-900 outline-none pb-1 text-[#a89b91] placeholder:text-[#a89b91] placeholder:font-bold font-bold transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <textarea
                        ref={textareaRef}
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="Body"
                        className="w-full bg-transparent border-b border-[#a89b91] focus:border-neutral-900 outline-none pb-1 text-[#a89b91] placeholder:text-[#a89b91] placeholder:font-bold font-bold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-12">
                    <button
                      type="submit"
                      disabled={loading}
                      className="text-[#b8aba1] font-bold text-lg hover:text-neutral-900 transition-colors disabled:opacity-50"
                    >
                      {loading ? 'Sending...' : 'Send'}
                    </button>
                  </div>
                  {status === 'success' && (
                    <p className="text-green-600 text-sm text-right font-medium mt-4">Gracias por tu mensaje, te responderé pronto :)</p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-500 text-sm text-right font-medium mt-4">Hubo un error al enviar :(.</p>
                  )}
                </form>
              </div>

              {/* ASCII Stars Overlay */}
              <div className="absolute top-0 right-0 md:-right-8 z-20 pointer-events-none opacity-40">
                <AsciiStars />
              </div>

              {/* Bottom Right Green Text */}
              <div className="absolute bottom-4 right-8 z-20">
                <p className="text-[#f4f4f4] italic text-xl font-medium blur-[0.5px]">
                  Quien soy es por<br />lo que fui
                </p>
              </div>

            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
