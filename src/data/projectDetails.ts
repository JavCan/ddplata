import pedirUnDeseo1 from '../../public/assets/pedir_un_deseo1.jpg';
import pedirUnDeseo2 from '../../public/assets/pedir_un_deseo2.jpg';
import pedirUnDeseo3 from '../../public/assets/pedir_un_deseo3.jpg';
import pedirUnDeseo4 from '../../public/assets/pedir_un_deseo4.jpg'; 
import pedirUnDeseo5 from '../../public/assets/pedir_un_deseo5.jpg';
import pedirUnDeseo6 from '../../public/assets/pedir_un_deseo6.jpg';

import servilletero1 from '../../public/assets/servilletero1.jpeg';
import servilletero2 from '../../public/assets/servilletero2.jpeg';
import servilletero3 from '../../public/assets/servilletero3.jpeg';

import libelula1 from '../../public/assets/libelula1.jpg';
import libelula2 from '../../public/assets/libelula2.jpg';
import libelula3 from '../../public/assets/libelula3.jpg';

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
            description: 'Primera exploración visual del deseo y la luz mediante formas sencillas y materiales honestos.',
            details: [
                { image: pedirUnDeseo1 },
                { image: pedirUnDeseo2 },
                { image: pedirUnDeseo3 },
            ],
        },
        {
            description: 'Detalle técnico y conceptual del proceso de diseño y fabricación del objeto.',
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
