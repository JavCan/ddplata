import { Hero } from './Hero';
import { Projects } from './Projects';
import { Footer } from './Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './Header';
import { useContact } from '../context/ContactContext';

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
    <div className="min-h-screen bg-white">
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
