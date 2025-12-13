import pedirUnDeseo1 from '../assets/pedir_un_deseo1.JPG';
import pedirUnDeseo2 from '../assets/pedir_un_deseo2.JPG';
import pedirUnDeseo3 from '../assets/pedir_un_deseo3.JPG';
import pedirUnDeseo4 from '../assets/pedir_un_deseo4.JPG'; 
import pedirUnDeseo5 from '../assets/pedir_un_deseo5.JPG';
import pedirUnDeseo6 from '../assets/pedir_un_deseo6.JPG';

// Corregido: Ruta a '../assets/' y extensión a .JPEG (Mayúsculas)
import servilletero1 from '../assets/servilletero1.JPEG';
import servilletero2 from '../assets/servilletero2.JPEG';
import servilletero3 from '../assets/servilletero3.JPEG';

// Corregido: Rutas a '../assets/'. Se mantienen las extensiones exactas del repo.
import libelula1 from '../assets/libelula1.JPG';
import libelula2 from '../assets/libelula2.jpg';
import libelula3 from '../assets/libelula3.JPG';

// Definición de tipos para los bloques
interface ProjectBlock {
    description: string;
    details: { image: string }[];
}

export interface ProjectDetail {
    id: number;
    title: string;
    category: string;
    year: string;
    // La descripción general del proyecto ya no es necesaria aquí, se mueve a los bloques
    // description: string; 
    // Ahora usamos un array de bloques
    blocks: ProjectBlock[];
}

export const projectDetails: ProjectDetail[] = [
  {
    id: 1,
    title: 'Pedir Un Deseo',
    category: 'Producto',
    year: '2025',
    // Estructura con bloques separados
    blocks: [
        {
            description: 'Familia de objetos que parten desde el sentimiento de deseo, tomando como inspiración el momento de soplar las velas en un cumpleaños, creando un ritual para pedir un deseo partiendo desde una vela, un candelabro y un apagador.',
            details: [
                { image: pedirUnDeseo1 },
                { image: pedirUnDeseo2 },
                { image: pedirUnDeseo3 },
            ],
        },
        {
            description: 'Gabinete para almacenar los objetos, elaborado de madera de haya, con un cajón que contiene un cerillo para prender la vela de tu deseo más especial.',
            details: [
                { image: pedirUnDeseo4 }, // Usar imágenes diferentes si las tienes
                { image: pedirUnDeseo6  },
                { image: pedirUnDeseo5  },
            ],
        },
        // Puedes añadir más bloques aquí si necesitas más secciones
    ],
  },
  {
    id: 2,
    title: 'Amanecer',
    category: 'Producto',
    year: '2024',
    // Estructura con bloques separados
    blocks: [
        {
            description: 'Primera exploración visual del deseo y la luz mediante formas sencillas y materiales honestos.',
            details: [
                { image: servilletero1 },
                { image: servilletero2 },
                { image: servilletero3 },
            ],
        },
    ],
  },
  {
    id: 3,
    title: 'Seres Mutantes',
    category: 'Producto',
    year: '2024',
    // Estructura con bloques separados
    blocks: [
        {
            description: 'Primera exploración visual del deseo y la luz mediante formas sencillas y materiales honestos.',
            details: [
                { image: libelula1 },
                { image: libelula2 },
                { image: libelula3 },
            ],
        },
    ],
  }
];
