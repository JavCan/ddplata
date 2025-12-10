import { ImageWithFallback } from './figma/ImageWithFallback';

// Definir las nuevas props
interface ProjectDetailBlockProps {
  projectTitle: string; // Título general para los alt texts
  description: string; // La descripción específica de este bloque
  details: { image: string }[]; // Las imágenes de este bloque
  onImageClick: (src: string) => void; // Nueva prop para manejar clics en imágenes
}

export function ProjectDetailBlock({ projectTitle, description, details, onImageClick }: ProjectDetailBlockProps) {
    
    // Si no hay detalles, no renderizamos
    if (!details || details.length === 0) {
        return null; 
    }

    return (
        <div className="space-y-30"> 
            <div className="flex flex-col md:flex-row md:gap-2">
                {/* Mapear directamente sobre el array 'details' que recibimos */}
                {details.map((detail, di) => { 
                    const basis = di === 0 ? 'md:basis-[40%]' : di === 1 ? 'md:basis-[30%]' : 'md:basis-[30%]';
                    return (
                        <div 
                            key={di} 
                            className={`relative aspect-auto bg-neutral-200 overflow-hidden mb-4 md:mb-0 ${basis} cursor-pointer`} 
                            onClick={() => onImageClick(detail.image)} // Activar el modal
                        >
                            <ImageWithFallback
                                src={detail.image}
                                alt={`${projectTitle} detalle ${di + 1}`}
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    );
                })}
            </div>
            {/* Usar la descripción específica de este bloque */}
            <p className="text-neutral-600 leading-relaxed">
                {description} 
            </p>
        </div>
    );
}