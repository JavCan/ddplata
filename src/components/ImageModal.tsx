// ImageModal.tsx
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string | null;
  onClose: () => void;
}

export function ImageModal({ isOpen, imageSrc, onClose }: ImageModalProps) {
  if (!isOpen || !imageSrc) {
    return null;
  }

  return (
    // Overlay de fondo (cubre toda la pantalla)
    <div 
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose} // Cierra al hacer clic en el overlay
    >
      {/* Botón de cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors z-[101]"
        aria-label="Cerrar imagen"
      >
        <X size={24} />
      </button>

      {/* Contenedor de la imagen */}
      <div 
        className="max-w-screen-lg max-h-screen-lg bg-white"
        onClick={(e) => e.stopPropagation()} // Evita que el clic en la imagen cierre el modal
      >
        <img 
          src={imageSrc} 
          alt="Imagen ampliada" 
          className="max-w-full max-h-[90vh] object-contain" 
        />
      </div>
    </div>
  );
}