import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { ProjectDetail } from './components/ProjectDetail';
import { Archive } from './components/Archive';
import { About } from './components/About';
import { ContactProvider } from './context/ContactContext';
import { ContactOverlay } from './components/ContactOverlay';

export default function App() {
  return (
    <ContactProvider>
      <div className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/about" element={<About />} />
          <Route path="/:slug" element={<ProjectDetail />} />
        </Routes>
        <ContactOverlay />
      </div>
    </ContactProvider>
  );
}