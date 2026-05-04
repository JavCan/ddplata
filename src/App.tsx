import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { ProjectDetail } from './components/ProjectDetail';
import { Archive } from './components/Archive';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}