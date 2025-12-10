import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projectDetails } from '../data/projectDetails.ts';
import { useEffect, useState } from 'react';
import { ImageModal } from './ImageModal';
// 1. IMPORTAR el nuevo componente
import { ProjectDetailBlock } from './ProjectDetailBlock'; 

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageSrc(null);
  };

  const project = projectDetails.find(p => p.id === Number(id));

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '' });
      
      // Resetear mensaje de confirmación después de 5 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-neutral-900 mb-4">Proyecto no encontrado</h2>
          <button
            onClick={() => navigate('/')}
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
    
        <ImageModal 
        isOpen={isModalOpen}
        imageSrc={selectedImageSrc}
        onClose={closeModal}
      />

      {/* Header con botón de regreso */}
      <header className="fixed top-0 left-0 right-0 bg-neutral-50/95 backdrop-blur-sm z-50 border-b border-neutral-200">
        <div className="px-6 py-4 flex items-center">
          <button
            onClick={() => navigate('/')}
            className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors -ml-2"
            aria-label="Volver"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="ml-2 text-neutral-900">Volver</div>
        </div>
      </header>

      {/* Contenido del proyecto */}
      <main className="pt-20 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Título y metadata */}
          <div className="mb-8">
            <h1 className="text-neutral-900 mb-3">{project.title}</h1>
            <div className="flex items-center gap-3 text-neutral-500">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
          </div>

         {project.blocks.map((block, index) => ( // <-- Aquí defines 'block'
            <div key={index} className="mb-30"> {/* Agregamos un margen inferior entre bloques */}
              <ProjectDetailBlock 
                description={block.description} // <-- 'block' está definido aquí
                details={block.details}       // <-- 'block' está definido aquí
                projectTitle={project.title}
                onImageClick={openModal}
              />
            </div>
          ))}

          {/* Botón para volver */}
          <div className="mt-16 text-center">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:border-neutral-400 transition-colors"
            >
              <ArrowLeft size={18} />
              Volver a proyectos
            </button>
          </div>
          {/* Formulario de contacto */}
          <div className="mt-16 pt-16 border-t border-neutral-200">
            <div className="text-center mb-6">
              <h3 className="text-neutral-900 mb-2">¿Interesado en esta pieza?</h3>
              <p className="text-neutral-600 text-sm">
                Déjanos tus datos y te enviaremos más información sobre especificaciones y disponibilidad.
              </p>
            </div>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre completo"
                    required
                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Correo electrónico"
                    required
                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar información'}
                </button>
              </form>
            ) : (
              <div className="py-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-neutral-900 mb-2">¡Solicitud enviada!</h4>
                <p className="text-neutral-600 text-sm">
                  Nos pondremos en contacto contigo pronto con toda la información.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}