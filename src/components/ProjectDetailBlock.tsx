import { ImageWithFallback } from './figma/ImageWithFallback';

// Definir las nuevas props
interface ProjectDetailBlockProps {
    projectTitle: string; // Título general para los alt texts
    description?: string; // La descripción específica de este bloque
    details: { image: string }[]; // Las imágenes de este bloque
    onImageClick: (src: string) => void; // Nueva prop para manejar clics en imágenes
}

export function ProjectDetailBlock({ projectTitle, description, details, onImageClick }: ProjectDetailBlockProps) {

    // Si no hay detalles, no renderizamos
    if (!details || details.length === 0) {
        return null;
    }

    return (
        <div className={`space-y-16 mx-auto px-4 ${details.length === 1 ? 'max-w-xl' : 'max-w-4xl'}`}>
            <div className={`grid gap-4 ${details.length === 1 ? 'grid-cols-1' :
                details.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                    'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}>
                {/* Mapear directamente sobre el array 'details' que recibimos */}
                {details.map((detail, di) => {
                    return (
                        <div
                            key={di}
                            className="relative aspect-[4/5] bg-neutral-200 overflow-hidden cursor-pointer group"
                            onClick={() => onImageClick(detail.image)} // Activar el modal
                        >
                            <ImageWithFallback
                                src={detail.image}
                                alt={`${projectTitle} detalle ${di + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101"
                            />
                        </div>
                    );
                })}
            </div>
            {/* Usar la descripción específica de este bloque */}
            {description && (
                <div className="max-w-2xl mx-auto text-center">
                    <p className="whitespace-pre-line text-[16px] xs:text-[18px] text-neutral-600 leading-relaxed">
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
}