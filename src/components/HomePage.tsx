import { Hero } from './Hero';
import { Projects } from './Projects';
import { Footer } from './Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './Header';
import { useContact } from '../context/ContactContext';
import { StarBackground } from './StarBackground';

export function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { openContact } = useContact();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('contact') === 'true') {
      openContact();
      // Clean up the URL
      navigate('/', { replace: true });
    }
  }, [location, navigate, openContact]);

  return (
    <div className="min-h-screen bg-transparent relative">
      <div className="fixed inset-0 bg-white z-[-10]" />
      <StarBackground />
      <Header />

      {/* Main Content */}
      <main className="pt-5">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
