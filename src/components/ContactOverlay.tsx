import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContact } from '../context/ContactContext';

export function ContactOverlay() {
    const { isContactOpen, closeContact } = useContact();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [emailError, setEmailError] = useState('');

    const textareaRef = useRef<HTMLTextAreaElement>(null);

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
        const value = e.target.value.replace(/\D/g, '');
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
                setTimeout(() => {
                    closeContact();
                    setStatus('idle');
                    setEmail('');
                    setPhone('');
                    setSubject('');
                    setBody('');
                }, 2000);
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
        <AnimatePresence>
            {isContactOpen && (
                <>
                    {/* Backdrop for focus */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeContact}
                        className="fixed inset-0 bg-black/5 z-[60] pointer-events-auto"
                    />

                    {/* Overlay Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 100, y: -20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, x: 100, y: -20 }}
                        className="fixed top-24 right-12 z-[70] w-full max-w-[380px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden border border-neutral-100 p-8"
                    >
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-2xl font-bold text-neutral-900 font-bristol">Contact</h2>
                            <button
                                onClick={closeContact}
                                className="text-neutral-400 hover:text-neutral-900 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col space-y-10">
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email*"
                                    required
                                    className={`w-full bg-transparent border-b-2 ${emailError ? 'border-red-400' : 'border-neutral-200'} focus:border-[#a5d6a7] outline-none pb-2 text-neutral-900 placeholder:text-neutral-400 font-medium transition-colors`}
                                />
                                {emailError && <p className="absolute text-[10px] text-red-500 mt-1 font-bold">{emailError}</p>}
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    placeholder="Phone"
                                    className="w-full bg-transparent border-b-2 border-neutral-200 focus:border-[#a5d6a7] outline-none pb-2 text-neutral-900 placeholder:text-neutral-400 font-medium transition-colors"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder="Subject*"
                                    required
                                    className="w-full bg-transparent border-b-2 border-neutral-200 focus:border-[#a5d6a7] outline-none pb-2 text-neutral-900 placeholder:text-neutral-400 font-medium transition-colors"
                                />
                            </div>

                            <div className="relative">
                                <textarea
                                    ref={textareaRef}
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                    placeholder="Message"
                                    rows={1}
                                    className="w-full bg-transparent border-b-2 border-neutral-200 focus:border-[#a5d6a7] outline-none pb-2 text-neutral-900 placeholder:text-neutral-400 font-medium transition-colors resize-none overflow-hidden min-h-[40px]"
                                />
                            </div>

                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 bg-neutral-900 text-white rounded-xl font-bold text-lg hover:bg-[#ff5c9d] hover:text-white transition-all disabled:opacity-50"
                                >
                                    {loading ? 'Sending...' : 'Send'}
                                </button>
                            </div>

                            {status === 'success' && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-green-600 text-sm text-center font-bold"
                                >
                                    ¡Mensaje enviado con éxito! :)
                                </motion.p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-500 text-sm text-center font-bold">Hubo un error al enviar :(</p>
                            )}
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
